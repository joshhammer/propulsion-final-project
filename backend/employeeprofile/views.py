from rest_framework.generics import ListCreateAPIView, GenericAPIView, get_object_or_404, UpdateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from salary.permissions import IsAdmin
from user.models import User
from user.serializers import UserSerializer


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


class DeactivateEmployeeTest(GenericAPIView):
    """
    get:
    toggle deactivate employee
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAdmin]

    lookup_field = 'user_id'




class DeactivateEmployee(GenericAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = [IsAdmin]

    lookup_field = 'user_id'

    def post(self, request, **kwargs):
        #user = User.objects.filter(user_id=lookup_field)
        #TODO
        pass


#  POST: Toggle activate an employee
class ToggleDeactivateEmployee(GenericAPIView):

    serializer_class = UserSerializer
    permission_classes = [IsAdmin]
    queryset = User.objects.all()

    # the method which activates or deactivates an employee
    def post(self, request, user_id):
        employee = get_object_or_404(User, user_id=user_id)
        if User in employee.is_active.all():
            employee.is_active.remove(User)
        else:
            employee.is_active.add(User)
        return Response(self.get_serializer(instance=employee).data)



