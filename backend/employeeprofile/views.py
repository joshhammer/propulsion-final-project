from rest_framework.generics import ListCreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from salary.permissions import IsAdmin
from user.models import User
from user.serializers import UserSerializer, UserLimitedSerializer


class GetMyEmployeeProfile(ListCreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = User.objects.filter(id=self.request.user.id)
        return queryset

    def post(self, request, **kwargs):
        user = User.objects.filter(id=self.request.user.id)
        user.update(**request.data)
        return Response('Profile updated')


class ListEmployees(ListAPIView):
    """
    get:
    List all employees of admin
    """
    serializer_class = UserLimitedSerializer
    permission_classes = [IsAdmin]

    def get_queryset(self):
        company_not_null = User.objects.filter(company_id__isnull=False)
        queryset = company_not_null.filter(company_id=self.request.user.company_id)
        return queryset


class RetrieveUpdateDestroyEmployee(RetrieveUpdateDestroyAPIView):
    """
    Admin has limited access to employee information and cannot change employee's password
    get:
    Get the details of an employee by providing the id of the employee (admin only)
    patch:
    Admin updates employee info
    delete:
    Admin deletes Employee user instance
    """
    queryset = User.objects.all()
    serializer_class = UserLimitedSerializer
    #permission_classes = [IsAdmin]

    lookup_url_kwarg = 'id'





