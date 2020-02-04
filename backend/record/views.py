from rest_framework.generics import CreateAPIView, ListAPIView

from record.models import Record
from record.permissions import IsAdminList
from record.serializers import RecordPayrollSerializer, RecordSalaryEmployeeSerializer, RecordDatesPaidSerializer

from rest_framework import status
from rest_framework.response import Response

from salary.permissions import IsAdmin


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


class ListRecordsByPaymentDate(ListAPIView):
    serializer_class = RecordSalaryEmployeeSerializer
    permission_classes = [IsAdminList]

    def get_queryset(self):
        #adminprofile = self.request.user.adminprofile
        # If no search string passed in url returns all records of admin's company
        if not self.request.query_params.get('search', None):
            return Record.objects.filter(company_id=self.request.user.company_id)

        # If string passed in url is <   search  >    : searches date_paid field using search parameter
        query_param = self.request.query_params['search']
        queryset = Record.objects.filter(date_paid=query_param, company_id=self.request.user.company_id)
        return queryset


class ListRecordsByEmployee(ListAPIView):
    serializer_class = RecordSalaryEmployeeSerializer
    permission_classes = [IsAdminList]

    def get_queryset(self):
        # If no search string passed in url returns all records of admin's company
        if not self.request.query_params.get('user_id', None):
            return Record.objects.filter(company_id=self.request.user.company_id).order_by('date_paid')

        # If string passed in url is <   user_id  >    : filters  user_id field
        queryset = Record.objects.all()
        query_param = self.request.query_params['user_id']
        queryset = queryset.filter(user_id=query_param, company_id=self.request.user.company_id).order_by('date_paid')
        return queryset


class ListDatesPaid(ListAPIView):
    serializer_class = RecordDatesPaidSerializer
    # Test later
    #permission_classes = [IsAdminList]

    def get_queryset(self):
        return Record.objects.filter(company_id=self.request.user.company_id).order_by('date_paid').distinct('date_paid')




