from django.core.exceptions import ValidationError
from rest_framework import serializers
from django.contrib.auth import get_user_model

from record.models import Record
from record.pdf import payslip_pdf

User = get_user_model()

class RecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Record
        fields = '__all__'


class RecordPayrollSerializer(serializers.Serializer):
    date_paid = serializers.DateField(label='Date paid')
    payperiod_start = serializers.DateField(label='Payperiod start date')
    payperiod_end = serializers.DateField(label='Payperiod end date')

    def save(self, validated_data):
        request = self.context['request']
        # Obtain record info
        date_paid = validated_data.get('date_paid')
        payperiod_start = validated_data.get('payperiod_start')
        payperiod_end = validated_data.get('payperiod_end')
        # First test creating new Record for AdminProfile
        #user = self.context['request'].user
        company = request.user.company

        #print(len(company.employees.all()))

        already_paid = company.employees.filter(record__date_paid=date_paid).exists()
        #print(already_paid)

        # if already_paid:
        #     print('Already paid, do not pay again')
        # else:
        #     print('Pay me!')
        host_url = request.META.get('wsgi.url_scheme') + '://' + request.META['HTTP_HOST']

        if not already_paid:
            for employee in company.employees.all():
                #print(employee.email)
                new_record = Record(
                    date_paid=date_paid,
                    payperiod_start=payperiod_start,
                    payperiod_end=payperiod_end,
                    user_id=employee.id,
                    company_id=company.id,
                )
                new_record.save()
                payslip_pdf(employee, new_record, host_url)
        else:
            #return HttpResponse('You have already scheduled payments on this day')
            raise ValidationError('You have already scheduled payments on this day')

        return



