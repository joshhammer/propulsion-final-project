from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView

from registration.views import RegistrationView, RegistrationValidationView, TokenUserObtainView, RegistrationEmployee, \
    PasswordResetView, PasswordResetValidationView

urlpatterns = [
    path('', RegistrationView.as_view(), name='registration'),
    path('validate/', RegistrationValidationView.as_view(), name='registration-validation'),
    path('employee/', RegistrationEmployee.as_view(), name='registration-employee'),
    path('token/', TokenUserObtainView.as_view(), name='retrieve-token-and-user'),
    path('token/refresh/', TokenRefreshView.as_view(), name='retrieve-refreshed-token'),
    # TODO check how to test this
    path('token/verify/', TokenVerifyView.as_view(), name='verify-token'),
    path('password-reset/', PasswordResetView.as_view(), name='reset-password'),
    path('password-reset/validate/', PasswordResetValidationView.as_view(), name="validate-reset-password"),
]