from django.conf import settings
from django.db import models


class Salary(models.Model):

    gross_month = models.FloatField(
        verbose_name='gross month',
        blank=True,
        null=True,
    )

    ahv_amount = models.FloatField(
        verbose_name='AHV amount',
        blank=True,
        null=True
    )

    alv_amount = models.FloatField(
        verbose_name='ALV amount',
        blank=True,
        null=True,
    )

    pension = models.FloatField(
        verbose_name='pension',
        blank=True,
        null=True,
    )

    net = models.FloatField(
        verbose_name='net',
        blank=True,
        null=True,
    )

    position = models.CharField(
        verbose_name='position',
        max_length=200,
        blank=True,
        null=True,
    )

    user = models.OneToOneField(
        verbose_name='user',
        on_delete=models.CASCADE,
        related_name='salary',
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
        return f'id: {self.id}  {self.user.email} {self.user.first_name} {self.user.last_name} Gross: {self.gross_month} Net: ' \
               f'' \
               f'{self.net} {self.position}'

