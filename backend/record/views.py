from rest_framework.generics import CreateAPIView

from record.serializers import RecordPayrollSerializer

from rest_framework import status
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


