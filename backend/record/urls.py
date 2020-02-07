from django.urls import path

from record.views import RecordRunpayroll, ListRecordsByPaymentDate, ListRecordsByEmployee, ListDatesPaid, \
    ListAllUserRecords

urlpatterns = [
    path('runpayroll/', RecordRunpayroll.as_view(), name="record-run-payroll"),

    # Returns all payments of admin's company
    # If search string passed (i.e. api/record/list/?search=<str:date_paid>  ) returns search results of date_paid field
    path('list/', ListRecordsByPaymentDate.as_view(), name="list-records-by-payment-date"),

    # Returns all payments of admin's company
    # If string passed in url is <   user_id  >    : filters  user_id field
    path('employee/', ListRecordsByEmployee.as_view(), name="list-records-employee"),

    path('dates-paid/', ListDatesPaid.as_view(), name='list-dates-paid'),

    path('all/', ListAllUserRecords.as_view(), name='list-all-user-records')
]