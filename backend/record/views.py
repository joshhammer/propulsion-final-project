from rest_framework import status
from rest_framework.generics import GenericAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from record.models import Record
from record.serializers import RecordPayrollSerializer, RecordSerializer
from user.models import User


from rest_framework import status, viewsets
from rest_framework.response import Response


class RecordRunpayroll(CreateAPIView):
    """
        post:
        Create Create new Records for each User paid in payroll in the Admin's Company
        TODO Create new pay slips for each Record
        TODO Create JSON to send to bank
        """
    serializer_class = RecordPayrollSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(serializer.validated_data)
        return Response(status=status.HTTP_200_OK)

    # serializer_class = RecordSerializer
    # permission_classes = [IsAuthenticated]
    #
    #
    # def perform_create(self, serializer):
    #     employees = User.objects.filter(company=self.request.user.company)
    #     for employee in employees:
    #         record = Record.objects.create(user=employee, company=self.request.user.company,
    #                                        **serializer.validated_data)
    #         return record
    #
    #
    #     # record = Record.objects.create(user=self.request.user, company=self.request.user.company, **serializer.validated_data)
    #     # return record
    #
    #     employees = User.objects.filter(company=self.request.user.company)
    #     return employees


class RecordRunpayrollTest(GenericAPIView):

    """This view snippet provides both list and item create functionality."""

    #I took the liberty to change the model to queryset
    queryset = User.objects.all()
    serializer_class = RecordSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data, many=isinstance(request.data,list))
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)