"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from record.pdf import payslip_pdf

urlpatterns = [
    path('api/admin/', admin.site.urls),
    #path('api/docs/', include_docs_urls(title='Django Template', schema_url='/', permission_classes=[])),
    path('api/registration/', include('registration.urls')),
    path('api/auth/', include('registration.urls')),
    path('api/adminprofile/', include('adminprofile.urls')),
    path('api/company/', include('company.urls')),
    path('api/pdf/', payslip_pdf, name="create-pdf"),
    path('api/employee/', include('employeeprofile.urls')),
    path('api/record/', include('record.urls')),
    path('api/salary/', include('salary.urls')),
    path('api/employees/', include('user.urls')),


]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
