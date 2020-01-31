from django.urls import path

from employeeprofile.views import GetMyEmployeeProfile

urlpatterns = [
    path('', GetMyEmployeeProfile.as_view(), name="my-employeeprofile")
]