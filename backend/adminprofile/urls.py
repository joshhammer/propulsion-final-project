from django.urls import path

from adminprofile.views import GetMyAdminProfile

urlpatterns = [
    path('', GetMyAdminProfile.as_view(), name="my-admin-profile")
]