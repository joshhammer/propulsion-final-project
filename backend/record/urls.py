from django.urls import path

from record.views import RecordRunpayroll

urlpatterns = [
    path('runpayroll/', RecordRunpayroll.as_view(), name="record-run-payroll"),
]