from django.conf import settings
from django.db import models


class EmployeeProfile(models.Model):

    user = models.OneToOneField(
        verbose_name='user',
        on_delete=models.CASCADE,
        related_name='employeeprofile',
        to=settings.AUTH_USER_MODEL
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
        return f'id: {self.id} {self.user.email},  {self.date_created} {self.date_modified}'
