from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.generics import GenericAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.exceptions import TokenError, InvalidToken
from rest_framework_simplejwt.views import TokenObtainPairView

from adminprofile.models import AdminProfile
from registration.models import Registration
from registration.serializers import RegistrationSerializer, RegistrationValidationSerializer, \
    RegistrationEmployeeSerializer
from user.serializers import UserSerializer

User = get_user_model()

class TokenUserObtainView(TokenObtainPairView):
    """
    post:
    Create a new session for a user. Sends back tokens and user.
    """

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        try:
            serializer.is_valid(raise_exception=True)
        except TokenError as e:
            raise InvalidToken(e.args[0])

        user = User.objects.get(email=request.data['email'])
        req = request
        req.user = user
        user_serializer = UserSerializer(instance=user, context={'request': req})
        res = {
            'user': user_serializer.data,
            **serializer.validated_data
        }

        return Response(res, status=status.HTTP_200_OK)


class RegistrationView(GenericAPIView):
    """
    post:
    Create an active "AP" (i.e. AdminProfile) user with email info only.
    """
    serializer_class = RegistrationSerializer
    permission_classes = []
    authentication_classes = []

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(serializer.validated_data)
        return Response(status=status.HTTP_200_OK)


class RegistrationValidationView(GenericAPIView):
    """
    patch:
    Update user info. Activate user.
    """
    permission_classes = []
    serializer_class = RegistrationValidationSerializer

    def patch(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(serializer.validated_data)
        return Response(status=status.HTTP_200_OK)


class RegistrationEmployee(GenericAPIView):
    """
    post:
    Create an active "EP" (i.e. EmployeeProfile) user with company the same as admin.
    Invite employee to create employee account by email.
    Create an instance of salary for employee.
    """
    serializer_class = RegistrationEmployeeSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(serializer.validated_data)
        return Response(status=status.HTTP_200_OK)





