from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from record.models import Record
from record.serializers import RecordSerializer
from salary.permissions import IsAdmin
from user.models import User
from user.serializers import UserLimitedSerializer, UserProfileTypeSerializer


# Old method returned employee profile as array rather than object
# class GetMyEmployeeProfile(ListCreateAPIView):
#     serializer_class = UserSerializer
#     queryset = User.objects.all()
#     permission_classes = [IsAuthenticated]
#
#     def get_queryset(self):
#         queryset = User.objects.filter(id=self.request.user.id)
#         return queryset
#
#     def post(self, request, **kwargs):
#         user = User.objects.filter(id=self.request.user.id)
#         user.update(**request.data)
#         return Response('Profile updated')


class GetMyEmployeeProfile(RetrieveUpdateDestroyAPIView):
    """
    get:
    Logged in employee can view user profile
    post:
    Logged in employee can update user profile
    """
    #serializer_class = UserSerializer
    serializer_class = UserProfileTypeSerializer
    queryset = User.objects.all()
    permission_classes = [IsAuthenticated]

    def retrieve(self, request, *args, **kwargs):
        instance = User.objects.get(id=self.request.user.id)
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        #instance = self.get_object()
        # ap = AdminProfile.objects.get(user=self.request.user)
        # instance = Company.objects.get(adminprofile=ap)
        instance = User.objects.get(id=self.request.user.id)
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        if getattr(instance, '_prefetched_objects_cache', None):
            # If 'prefetch_related' has been applied to a queryset, we need to
            # forcibly invalidate the prefetch cache on the instance.
            instance._prefetched_objects_cache = {}

        return Response(serializer.data)


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


class ListRecords(ListAPIView):
    """
    get:
    List all records of employee
    """
    serializer_class = RecordSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = Record.objects.filter(user=self.request.user)
        return queryset







