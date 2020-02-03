from django_extensions.db.models import TimeStampedModel
from django.conf import settings
from django.db import models
import random


def code_generator(length=5):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


class Registration(TimeStampedModel):
    user = models.OneToOneField(
        verbose_name='user',
        on_delete=models.CASCADE,
        related_name='registration',
        to=settings.AUTH_USER_MODEL
    )
    profile_type = models.CharField(
        verbose_name='profile type',
        max_length=2,
        choices=(
            ('AP', 'Admin Profile'),
            ('EP', 'Employee Profile')
        ),
        default='AP'
    )
    code = models.CharField(
        verbose_name='code',
        help_text='random code used for registration and for password reset',
        max_length=15,
        default=code_generator
    )
    code_type = models.CharField(
        verbose_name='code type',
        max_length=2,
        choices=(
            ('RV', 'Registration Validation'),
            ('PR', 'Password Reset')
        )
    )
    code_used = models.BooleanField(
        verbose_name='code used',
        default=False
    )

    date_created = models.DateTimeField(
        verbose_name='date created',
        auto_now_add=True,
    )

    date_modified = models.DateTimeField(
        verbose_name='date modified',
        auto_now=True,
    )

    def __str__(self):
        return f'id: {self.id}  {self.user.email}, {self.code} {self.profile_type} {self.date_created} {self.date_modified}'


