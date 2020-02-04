from django.core.exceptions import ValidationError
from rest_framework import serializers
from django.contrib.auth import get_user_model

from record.models import Record
from user.serializers import UserLimitedSerializer, UserSerializer

User = get_user_model()

class RecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Record
        fields = '__all__'


class RecordSalaryEmployeeSerializer(serializers.ModelSerializer):
    user = UserLimitedSerializer()

    class Meta:
        model = Record
        fields = ['user', 'id','date_paid', 'payperiod_start', 'payperiod_end', 'company']



class RecordPayrollSerializer(serializers.Serializer):
    date_paid = serializers.DateField(label='Date paid')
    payperiod_start = serializers.DateField(label='Payperiod start date')
    payperiod_end = serializers.DateField(label='Payperiod end date')

    def save(self, validated_data):
        # Obtain record info
        date_paid = validated_data.get('date_paid')
        payperiod_start = validated_data.get('payperiod_start')
        payperiod_end = validated_data.get('payperiod_end')
        # First test creating new Record for AdminProfile
        #user = self.context['request'].user
        company = self.context['request'].user.company

        #print(len(company.employees.all()))

        already_paid = company.employees.filter(record__date_paid = date_paid).exists()
        #print(already_paid)

        # if already_paid:
        #     print('Already paid, do not pay again')
        # else:
        #     print('Pay me!')

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
        else:
            #return HttpResponse('You have already scheduled payments on this day')
            raise ValidationError('You have already scheduled payments on this day')

        return



