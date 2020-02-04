from django.urls import path

from record.views import RecordRunpayroll, ListRecordsByPaymentDate

urlpatterns = [
    path('runpayroll/', RecordRunpayroll.as_view(), name="record-run-payroll"),

    # Returns all payments of admin's company
    # If search string passed (i.e. api/?search=<str:date_paid>  ) returns search results of date_paid field
    path('list/', ListRecordsByPaymentDate.as_view(), name="list-records-by-payment-date"),
]