from django.urls import path

from user.views import RetrieveUpdateDestroyEmployeeUser

urlpatterns=[
    path('<int:id>/', RetrieveUpdateDestroyEmployeeUser.as_view(), name="update-employee"),
]