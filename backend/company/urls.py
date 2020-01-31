from django.urls import path

from company.views import CreateCompany, GetMyCompany

urlpatterns = [
    path('new/', CreateCompany.as_view(), name="create-company"),
    path('', GetMyCompany.as_view(), name="get-update-company"),
]