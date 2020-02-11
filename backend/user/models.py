from django.contrib.auth.models import AbstractUser
from django.db import models

from company.models import Company


class User(AbstractUser):

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    email = models.EmailField(unique=True)

    username = models.CharField(
        verbose_name='username',
        max_length=200,
        unique=True,
        blank=True,
    )

    # one to one relationship with AdminProfile

    # one to one relationship with EmployeeProfile

    # Require first name
    first_name = models.CharField(
        verbose_name='first name',
        max_length=200,
        #blank=True,
    )

    # Require last name
    last_name = models.CharField(
        verbose_name='last name',
        max_length=200,
        #blank=True,
    )

    # Should this not be required? For example, when an Admin creates a new User
    password = models.CharField(
        verbose_name='password',
        max_length=200,
        blank=True,
    )

    is_active = models.BooleanField(
        verbose_name='is active',
        default=True,
    )

    date_created = models.DateTimeField(
        verbose_name='date created',
        auto_now_add=True,
    )

    date_modified = models.DateTimeField(
        verbose_name='date modified',
        auto_now=True,
    )

    bank_name = models.CharField(
        verbose_name='bank name',
        max_length=200,
        null=True,
        blank=True
    )

    # Require AHV number
    ahv = models.CharField(
        verbose_name='AHV number',
        max_length=200,
    )

    # IBAN is required field
    iban = models.CharField(
        verbose_name='IBAN number',
        max_length=100,
    )

    # record - foreign key for Record model, "1 User has many Records; 1 Record is assigned to 1 User"

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

    # one to one relationship with Salary

    # documents - foreign key for Document model, "1 User has many Documents; 1 Document is assigned to 1 User"

    # one to one relationship with Registration

    company = models.ForeignKey(
        verbose_name='Company',
        to=Company,
        on_delete=models.CASCADE,
        related_name='employees',
        null=True,
        blank=True,
    )

    profile_picture = models.ImageField(
        upload_to='',
        blank=True,
    )

    phone = models.CharField(
        verbose_name='phone',
        max_length=200,
        blank=True,
        null=True,
    )

    def __str__(self):
        return f'id: {self.id} {self.email}  {self.first_name} {self.last_name} {self.date_created} {self.date_modified}'
