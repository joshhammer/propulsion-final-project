# Generated by Django 3.0 on 2020-01-28 13:51

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='AdminProfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_created', models.DateTimeField(auto_now_add=True, verbose_name='date created')),
                ('date_modified', models.DateTimeField(auto_now=True, verbose_name='date modified')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='adminprofile', to=settings.AUTH_USER_MODEL, verbose_name='user')),
            ],
        ),
    ]
