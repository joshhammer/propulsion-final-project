from django.urls import path

from registration.views import RegistrationView

urlpatterns = [
    path('', RegistrationView.as_view(), name='registration'),
]