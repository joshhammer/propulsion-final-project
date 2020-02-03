from django.conf import settings
from django.db import models

from company.models import Company


class Record(models.Model):

    date_paid = models.DateField(
        verbose_name='date paid'
    )

    payperiod_start = models.DateField(
        verbose_name='payperiod start date'
    )

    payperiod_end = models.DateField(
        verbose_name='payperiod end date',
    )

    date_created = models.DateTimeField(
        verbose_name='date created',
        auto_now_add=True,
    )

    date_modified = models.DateTimeField(
        verbose_name='date modified',
        auto_now=True,
    )

    user = models.ForeignKey(
        verbose_name='user',
        to=settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='record',
    )

    company = models.ForeignKey(
        verbose_name='company',
        to=Company,
        on_delete=models.CASCADE,
        related_name='record',
    )

    def __str__(self):
        return f'{self.user.email} {self.user.first_name} {self.user.last_name} Company: {self.company.name} Date Paid: {self.date_paid}  Payperiod Start: {self.payperiod_start}  Payperiod End: {self.payperiod_end}'
