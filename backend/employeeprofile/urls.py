from django.urls import path

from employeeprofile.views import GetMyEmployeeProfile, ToggleDeactivateEmployee

urlpatterns = [
    path('', GetMyEmployeeProfile.as_view(), name="my-employeeprofile"),
    path('deactivate/<int:user_id>/', ToggleDeactivateEmployee.as_view(), name="deactivate-employee"),
]