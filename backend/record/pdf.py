from __future__ import unicode_literals

from django.contrib.auth import get_user_model
from django.http import HttpResponse
from django.template.loader import render_to_string
from django.utils.text import slugify
from django.contrib.auth.decorators import login_required
from rest_framework.generics import get_object_or_404

from weasyprint import HTML, CSS
from weasyprint.fonts import FontConfiguration

from project import settings

from salary.models import Salary
from record.models import Record
from user.models import User
from django.core.files.uploadedfile import SimpleUploadedFile


User = get_user_model()

# paid_employee = (User, Record):


def payslip_pdf(paid_employee, record, host_url):
    salary = get_object_or_404(Salary, user=paid_employee)

    html = render_to_string(
        template_name="payslip_pdf.html", 
        context={'payslip': paid_employee, 'salary': salary, 'record': record,
                    })

    css = CSS(host_url + settings.STATIC_ROOT + 'payslip_pdf.css')

    # print(request.META.get('wsgi.url_scheme') + '://' + request.META['HTTP_HOST'], settings.STATIC_ROOT)

    font_config = FontConfiguration()
    pdf_file = HTML(string=html).write_pdf(stylesheets=[css], font_config=font_config)
    record.pdfstorage = SimpleUploadedFile(f'Report-{record.date_paid.strftime("%d-%m-%Y")}.pdf', pdf_file, content_type='application/pdf')
    record.save()


def report_pdf(company, record_list, total__paid, new_report, paid_employee, record, host_url):
    salary = get_object_or_404(Salary, user=paid_employee)

    employee = []
    employee.append(record_list[0].id)

    html = render_to_string(
        template_name="report_pdf.html",
        context={'company': company, 'record_list':record_list, 'total_paid':total__paid, 'new_report':new_report,
                 'payslip': paid_employee, 'salary': salary, 'record': record, 'employee':employee,
                    })

    css = CSS(host_url + settings.STATIC_ROOT + 'report_pdf.css')
    font_config = FontConfiguration()
    pdf_file = HTML(string=html).write_pdf(stylesheets=[css], font_config=font_config)
    new_report.reportfiles = SimpleUploadedFile(f'Payperiod Report-{record.date_paid.strftime("%d-%m-%Y")}.pdf', pdf_file,
                                              content_type='application/pdf')
    new_report.save()



