#!/bin/bash
python -c "import time; time.sleep(3)" # Wait for postgres to start up
python manage.py makemigrations
python manage.py migrate
python manage.py runserver 0.0.0.0:8000 # "runserver" is good enough for local environment

# don't use "python manage.py runserver" in production: https://vsupalov.com/django-runserver-in-production/
