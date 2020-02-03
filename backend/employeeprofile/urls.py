from django.urls import path

from employeeprofile.views import GetMyEmployeeProfile, ListEmployees

urlpatterns = [
    path('', GetMyEmployeeProfile.as_view(), name="my-employeeprofile"),
    path('all/', ListEmployees.as_view(), name="list-employees"),
    #path('<int:id>/', RetrieveUpdateDestroyEmployee.as_view(), name="update-employee"),

]