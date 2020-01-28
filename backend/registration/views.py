from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from registration.serializers import RegistrationSerializer


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

