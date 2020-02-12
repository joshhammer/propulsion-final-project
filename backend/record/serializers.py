from django.core.exceptions import ValidationError
from rest_framework import serializers
from django.contrib.auth import get_user_model

from company.serializers import CompanySerializer
from record.models import Record
from record.pdf import payslip_pdf, report_pdf
from report.models import Report
from report.serializers import ReportSerializer
from user.serializers import UserLimitedSerializer, UserSerializer

User = get_user_model()

class RecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Record
        fields = '__all__'


class RecordDatesPaidSerializer(serializers.ModelSerializer):
    total_salary_paid = serializers.SerializerMethodField()
    report = ReportSerializer()

    class Meta:
        model = Record
        fields = ['date_paid', 'payperiod_start', 'payperiod_end', 'total_salary_paid', 'report']

    def get_total_salary_paid(self, obj):
        record_list = Record.objects.filter(date_paid=obj.date_paid, company_id=obj.user.company_id)
        sum = 0
        for record in record_list:
            sum += record.user.salary.gross_month
        return sum


class RecordSalaryEmployeeSerializer(serializers.ModelSerializer):
    user = UserLimitedSerializer()
    company= CompanySerializer()
    report = ReportSerializer()

    class Meta:
        model = Record
        fields = ['user', 'id','date_paid', 'payperiod_start', 'payperiod_end', 'company', 'report']



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
        company = request.user.company

        already_paid = company.employees.filter(record__date_paid=date_paid).exists()
        host_url = request.META.get('wsgi.url_scheme') + '://' + request.META['HTTP_HOST']

        if not already_paid:
            record_list = []
            total_paid = 0

            new_report = Report(
                company_id=company.id,
            )
            new_report.save()

            for employee in company.employees.all():
                new_record = Record(
                    date_paid=date_paid,
                    payperiod_start=payperiod_start,
                    payperiod_end=payperiod_end,
                    user_id=employee.id,
                    company_id=company.id,
                    report_id=new_report.id
                )
                new_record.save()
                payslip_pdf(employee, new_record, host_url)
                record_list.append(new_record)
                total_paid += new_record.user.salary.gross_month

            report_pdf(company, record_list, total_paid, new_report, employee, new_record, host_url)

        else:
            raise ValidationError('You have already scheduled payments on this day')

        return



