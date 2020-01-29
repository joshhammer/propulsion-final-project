from django.urls import path

from company.views import CreateCompany

urlpatterns = [
    path('new/', CreateCompany.as_view(), name="create-company"),
]