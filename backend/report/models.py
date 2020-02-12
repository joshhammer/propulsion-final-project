from django.conf import settings
from django.db import models

from company.models import Company


class Report(models.Model):

    date_created = models.DateTimeField(
        verbose_name='date created',
        auto_now_add=True,
    )

    date_modified = models.DateTimeField(
        verbose_name='date modified',
        auto_now=True,
    )

    reportfiles= models.FileField(
        verbose_name='reportfiles',
        upload_to='reportfiles/',
        blank=True,
        null=True
    )

    # record - foreign key for Record model, "1 Report has many Records; 1 Record is assigned to 1 Report"

    company = models.ForeignKey(
        verbose_name='company',
        to=Company,
        on_delete=models.CASCADE,
        related_name='report',
    )


    def __str__(self):
        return f'id: {self.id}  Company: {self.company.name}'
