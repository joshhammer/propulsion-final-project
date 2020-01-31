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

User = get_user_model()


def payslip_pdf(request):
    payslip = get_object_or_404(User, pk=1)
    response = HttpResponse(content_type="application/pdf")
    response['Content-Disposition'] = "inline; filename={date}-{name}-payslip.pdf".format(
        date=payslip.date_created.strftime('%Y-%m-%d'),
        name=slugify(payslip.email),
    )
    html = render_to_string(
        template_name="payslip_pdf.html", 
        context={'payslip': payslip,
                    })

    host_url = request.META.get('wsgi.url_scheme') + '://' + request.META['HTTP_HOST']
    css = CSS(host_url + settings.STATIC_ROOT + 'payslip_pdf.css')

    # print(request.META.get('wsgi.url_scheme') + '://' + request.META['HTTP_HOST'], settings.STATIC_ROOT)

    font_config = FontConfiguration()
    HTML(string=html).write_pdf(response, stylesheets=[css], font_config=font_config)
    return response

