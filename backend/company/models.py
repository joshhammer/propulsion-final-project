from django.db import models

from adminprofile.models import AdminProfile


class Company(models.Model):

    adminprofile = models.OneToOneField(
        verbose_name='AdminProfile',
        on_delete=models.CASCADE,
        related_name='company',
        to=AdminProfile
    )

    # Require name
    name = models.CharField(
        verbose_name='name',
        max_length=200,
    )

    # Require house number
    house_number = models.CharField(
        verbose_name='house number',
        max_length=100,
    )

    # Require street
    street = models.CharField(
        verbose_name='street',
        max_length=200,
    )

    # Require city
    city = models.CharField(
        verbose_name='city',
        max_length=200,
    )

    # Require postal code
    postal_code = models.CharField(
        verbose_name='postal code',
        max_length=100,
    )

    # Require country
    country = models.CharField(
        verbose_name='country',
        max_length=100,
    )

    legal_number = models.CharField(
        verbose_name='legal number',
        max_length=200,
        blank=True,
    )

    poc_name = models.CharField(
        verbose_name='point of contact name',
        max_length=200,
    )

    poc_phone = models.CharField(
        verbose_name='point of contact phone',
        max_length=200,
    )

    poc_email = models.CharField(
        verbose_name='point of contact email',
        max_length=200,
    )

    bank_name = models.CharField(
        verbose_name='bank name',
        max_length=200,
    )

    iban = models.CharField(
        verbose_name='IBAN number',
        max_length=200,
    )

    bic = models.CharField(
        verbose_name='BIC number',
        max_length=200,
        blank=True,
    )

    date_created = models.DateTimeField(
        verbose_name='date created',
        auto_now_add=True,
    )

    date_modified = models.DateTimeField(
        verbose_name='date modified',
        auto_now=True,
    )

    # user - foreign key for User model, "1 Company has many Users; 1 User is assigned to 1 Company"

    # record - foreign key for Record model, "1 Company has many Records; 1 Record is assigned to 1 Company"

    def __str__(self):
        return f'id:{self.id}  {self.adminprofile.user.email},  {self.name}  {self.date_created} {self.date_modified}'


