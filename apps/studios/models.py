from django.utils.translation import gettext_lazy as _
from django.db import models
from django.conf import settings
from decimal import Decimal

class Studio(models.Model):
    """
    Model representing a music studio.
    """
    name = models.CharField(max_length=255)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    description = models.TextField(blank=True)
    address = models.TextField(blank=True)
    contact_email = models.EmailField(blank=True)
    contact_phone = models.CharField(max_length=15, blank=True)
    website = models.URLField(blank=True)
    logo = models.ImageField(upload_to='studios/logos/', blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['owner']),
        ]

    def __str__(self):
        return self.name

class Room(models.Model):
    """
    Model representing a room within a studio.
    """
    ROOM_TYPES = (
        ('recording', _('Recording Room')),
        ('rehearsal', _('Rehearsal Room')),
        ('mixing', _('Mixing Room')),
        ('production', _('Production Suite')),
        ('other', _('Other')),
    )

    studio = models.ForeignKey(Studio, on_delete=models.CASCADE, related_name='rooms')
    name = models.CharField(max_length=255)
    room_type = models.CharField(max_length=20, choices=ROOM_TYPES, default='recording')
    description = models.TextField(blank=True)
    capacity = models.PositiveIntegerField()
    hourly_rate = models.DecimalField(max_digits=10, decimal_places=2)
    equipment = models.TextField(blank=True)
    photos = models.ImageField(upload_to='rooms/photos/', blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['studio', 'name']
        indexes = [
            models.Index(fields=['studio']),
        ]

    def __str__(self):
        return f"{self.studio.name} - {self.name}"
