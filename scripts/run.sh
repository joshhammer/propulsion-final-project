#!/bin/bash
python -c "import time; time.sleep(3)" # Wait for postgres to start up
python manage.py migrate
python manage.py collectstatic --no-input

#python manage.py runserver 0.0.0.0:8000  # don't use in prod: https://vsupalov.com/django-runserver-in-production/
#/opt/conda/envs/app/bin/gunicorn -w 4 -b 0.0.0.0:8000 app.wsgi:application
gunicorn -w 4 -b 0.0.0.0:8000 project.wsgi:application



# -w stands for workers
# -b stands for bind
