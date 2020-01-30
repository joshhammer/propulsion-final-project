from django.core.exceptions import ValidationError
from rest_framework.exceptions import PermissionDenied
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated

from adminprofile.models import AdminProfile
from company.models import Company
#from company.permissions import IsAdminprofile
from company.serializers import CompanySerializer


class CreateCompany(CreateAPIView):
    """
    post:
    Logged in adminprofile user can create new company
    """
    serializer_class = CompanySerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        try:
            ap = AdminProfile.objects.get(user=self.request.user)
            company = Company.objects.create(adminprofile=ap, **serializer.validated_data)
            return company
        except:
            raise PermissionDenied({"message" :'You have already created a company with this administrator account'})
