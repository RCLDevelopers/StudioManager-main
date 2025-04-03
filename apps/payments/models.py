from django.utils.translation import gettext_lazy as _
from django.db import models
from django.conf import settings
from decimal import Decimal

class Payment(models.Model):
    """
    Model representing a payment for a booking.
    """
    PAYMENT_STATUS_CHOICES = (
        ('pending', _('Pending')),
        ('completed', _('Completed')),
        ('failed', _('Failed')),
        ('refunded', _('Refunded')),
    )

    PAYMENT_METHOD_CHOICES = (
        ('credit_card', _('Credit Card')),
        ('debit_card', _('Debit Card')),
        ('bank_transfer', _('Bank Transfer')),
        ('cash', _('Cash')),
        ('other', _('Other')),
    )

    booking = models.ForeignKey('bookings.Booking', on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_method = models.CharField(max_length=20, choices=PAYMENT_METHOD_CHOICES)
    status = models.CharField(max_length=20, choices=PAYMENT_STATUS_CHOICES, default='pending')
    transaction_id = models.CharField(max_length=100, blank=True)
    payment_date = models.DateTimeField()
    notes = models.TextField(blank=True)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-payment_date']
        indexes = [
            models.Index(fields=['booking']),
            models.Index(fields=['payment_date']),
        ]

    def __str__(self):
        return f"Payment for {self.booking} - {self.amount}"

class Invoice(models.Model):
    """
    Model representing an invoice for a booking.
    """
    INVOICE_STATUS_CHOICES = (
        ('draft', _('Draft')),
        ('sent', _('Sent')),
        ('paid', _('Paid')),
        ('cancelled', _('Cancelled')),
        ('overdue', _('Overdue')),
    )

    booking = models.OneToOneField('bookings.Booking', on_delete=models.CASCADE)
    invoice_number = models.CharField(max_length=50, unique=True)
    status = models.CharField(max_length=20, choices=INVOICE_STATUS_CHOICES, default='draft')
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    tax_amount = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    issue_date = models.DateField()
    due_date = models.DateField()
    notes = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-issue_date']
        indexes = [
            models.Index(fields=['booking']),
            models.Index(fields=['invoice_number']),
            models.Index(fields=['issue_date']),
        ]

    def __str__(self):
        return f"Invoice {self.invoice_number} for {self.booking}"

    def calculate_total(self):
        """Calculate total amount including tax"""
        return float(self.amount) + float(self.tax_amount)

    def save(self, *args, **kwargs):
        if not self.total_amount:
            self.total_amount = self.calculate_total()
        super().save(*args, **kwargs)
