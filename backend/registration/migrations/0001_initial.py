# Generated by Django 3.0 on 2020-01-28 13:11

from django.db import migrations, models
import django_extensions.db.fields
import registration.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Registration',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('profile_type', models.CharField(choices=[('AP', 'Admin Profile'), ('EP', 'Employee Profile')], default='AP', max_length=2, verbose_name='profile type')),
                ('code', models.CharField(default=registration.models.code_generator, help_text='random code used for registration and for password reset', max_length=15, verbose_name='code')),
                ('code_type', models.CharField(choices=[('RV', 'Registration Validation'), ('PR', 'Password Reset')], max_length=2, verbose_name='code type')),
                ('code_used', models.BooleanField(default=False, verbose_name='code used')),
                ('date_created', models.DateTimeField(auto_now_add=True, verbose_name='date created')),
                ('date_modified', models.DateTimeField(auto_now=True, verbose_name='date modified')),
            ],
            options={
                'ordering': ('-modified', '-created'),
                'get_latest_by': 'modified',
                'abstract': False,
            },
        ),
    ]
