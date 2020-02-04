from rest_framework.generics import RetrieveUpdateDestroyAPIView

from user.permissions import IsAdminUser
from user.models import User
from user.serializers import UserLimitedSerializer


class RetrieveUpdateDestroyEmployeeUser(RetrieveUpdateDestroyAPIView):
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
    permission_classes = [IsAdminUser]

    lookup_url_kwarg = 'id'