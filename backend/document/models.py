from django.conf import settings
from django.db import models


class Document(models.Model):

    docstorage = models.FileField(
        verbose_name='docstorage',
        upload_to='docstorage/',
        blank=True,
        null=True
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
        related_name='document',
    )

    category = models.CharField(
        verbose_name='category',
        max_length=2,
        choices=(
            ('TX', 'Tax'),
            ('HY', 'Holiday'),
            ('OT', 'Other')
        ),
        default='OT'
    )


    def __str__(self):
        return f'id: {self.id}  {self.user.email} {self.user.first_name} {self.user.last_name} Category: {self.category}'

