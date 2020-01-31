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
    # salary = get_object_or_404(User, pk=1)
    response = HttpResponse(content_type="application/pdf")
    response['Content-Disposition'] = "inline; filename={date}-{name}-payslip.pdf".format(
        date=payslip.date_created.strftime('%Y-%m-%d'),
        name=slugify(payslip.email),
    )
    html = render_to_string(
        template_name="payslip_pdf.html", 
        context={'payslip': payslip,
                 # 'salary': salary,
                    })

    host_url = request.META.get('wsgi.url_scheme') + '://' + request.META['HTTP_HOST']
    css = CSS(host_url + settings.STATIC_ROOT + 'payslip_pdf.css')

    # print(request.META.get('wsgi.url_scheme') + '://' + request.META['HTTP_HOST'], settings.STATIC_ROOT)

    font_config = FontConfiguration()
    HTML(string=html).write_pdf(response, stylesheets=[css], font_config=font_config)
    return response


# def letter_pdf(request, letter_id):
#     letter = get_object_or_404(Letter, pk=letter_id)
#     response = HttpResponse(content_type='application/pdf')
#     response['Content-Disposition'] = (
#         'inline; '
#         f'filename={letter.created:%Y-%m-%d}-letter.pdf'
#     )
#     COMPONENTS = [
#         'letters/pdf/cover.html',
#         'letters/pdf/page01.html',
#         'letters/pdf/page02.html',
#         'letters/pdf/page03.html',
#     ]
#     documents = []
#     font_config = FontConfiguration()
#     for template_name in COMPONENTS:
#         html = render_to_string(template_name, {
#             'letter': letter,
#         })
#         document = HTML(string=html).render(font_config=font_config)
#         documents.append(document)

#     all_pages = [page for document in documents for page in document.pages]
#     documents[0].copy(all_pages).write_pdf(response)

#     return response

