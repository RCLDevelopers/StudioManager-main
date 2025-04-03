from django.utils.translation import gettext_lazy as _
from django.db import models
from django.conf import settings
from decimal import Decimal

class Booking(models.Model):
    """
    Model representing a booking for a studio room.
    """
    STATUS_CHOICES = (
        ('pending', _('Pending')),
        ('confirmed', _('Confirmed')),
        ('cancelled', _('Cancelled')),
        ('completed', _('Completed')),
    )

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    room = models.ForeignKey('studios.Room', on_delete=models.CASCADE)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    notes = models.TextField(blank=True)
    number_of_guests = models.PositiveIntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-start_time']
        indexes = [
            models.Index(fields=['user']),
            models.Index(fields=['room']),
            models.Index(fields=['start_time']),
            models.Index(fields=['end_time']),
            models.Index(fields=['status']),
        ]

    def __str__(self):
        return f"{self.room.studio.name} - {self.room.name} ({self.start_time})"

    def calculate_duration(self):
        """Calculate the duration of the booking in hours"""
        duration = self.end_time - self.start_time
        return duration.total_seconds() / 3600

    def calculate_total_price(self):
        """Calculate the total price based on duration and room rate"""
        duration = self.calculate_duration()
        return float(self.room.hourly_rate) * duration

    def save(self, *args, **kwargs):
        if not self.total_price:
            self.total_price = self.calculate_total_price()
        super().save(*args, **kwargs)

class BookingStatus(models.Model):
    """
    Model for tracking booking status changes.
    """
    booking = models.ForeignKey(Booking, on_delete=models.CASCADE, related_name='status_history')
    status = models.CharField(max_length=20, choices=Booking.STATUS_CHOICES)
    notes = models.TextField(blank=True)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['booking']),
            models.Index(fields=['created_at']),
        ]

    def __str__(self):
        return f"{self.booking} - {self.status} ({self.created_at})"
