#from django.core.exceptions import ValidationError
from rest_framework.exceptions import PermissionDenied
from rest_framework.generics import CreateAPIView, ListCreateAPIView, GenericAPIView, RetrieveAPIView, \
    RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

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


# Old method returns company as array rather than object
# class GetMyCompany(ListCreateAPIView):
#     """
#     get:
#     Logged in adminprofile can get (view) company info
#     post:
#     Logged in adminprofile user can update company info
#     """
#     serializer_class = CompanySerializer
#     queryset = Company.objects.all()
#     permission_classes = [IsAuthenticated]
#
#     def get_queryset(self):
#         ap = AdminProfile.objects.get(user=self.request.user)
#         queryset = Company.objects.filter(adminprofile=ap)
#         return queryset
#
#     def post(self, request, **kwargs):
#         ap = AdminProfile.objects.get(user=self.request.user)
#         company = Company.objects.filter(adminprofile=ap)
#         company.update(**request.data)
#         return Response('Profile updated')


class GetMyCompany(RetrieveUpdateDestroyAPIView):
    """
    get:
    Logged in adminprofile can get (view) company info
    post:
    Logged in adminprofile user can update company info
    """
    serializer_class = CompanySerializer
    queryset = Company.objects.all()
    permission_classes = [IsAuthenticated]

    def retrieve(self, request, *args, **kwargs):
        #instance = self.get_object()
        ap = AdminProfile.objects.get(user=self.request.user)
        instance = Company.objects.get(adminprofile=ap)
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        #instance = self.get_object()
        ap = AdminProfile.objects.get(user=self.request.user)
        instance = Company.objects.get(adminprofile=ap)
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        if getattr(instance, '_prefetched_objects_cache', None):
            # If 'prefetch_related' has been applied to a queryset, we need to
            # forcibly invalidate the prefetch cache on the instance.
            instance._prefetched_objects_cache = {}

        return Response(serializer.data)



