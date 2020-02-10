from django.urls import path

from document.views import CreateDocument, ListAllUserDocuments, ListCreateUserDocuments

urlpatterns = [
    path('new/', CreateDocument.as_view(), name="create-document"),
    path('all/', ListAllUserDocuments.as_view(), name="list-user-documents"),
    path('', ListCreateUserDocuments.as_view(), name="update-employee"),
]