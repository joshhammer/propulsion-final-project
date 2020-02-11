from rest_framework.generics import CreateAPIView, ListAPIView, ListCreateAPIView
from rest_framework.permissions import IsAuthenticated

from document.models import Document
from document.serializers import DocumentSerializer
from salary.permissions import IsAdmin
from user.models import User


class CreateDocument(CreateAPIView):
    """
    post:
    Logged in user can "create" (upload) document
    """
    serializer_class = DocumentSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        myuser = User.objects.get(id=self.request.user.id)
        doc = Document.objects.create(user_id=myuser.id, **serializer.validated_data)
        return doc


class ListAllUserDocuments(ListAPIView):
    serializer_class = DocumentSerializer
    queryset = Document.objects.all()
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = Document.objects.filter(user_id=self.request.user.id)
        return queryset


class ListCreateUserDocuments(ListCreateAPIView):
    """
    get:
    Get the documents of an employee by providing the id of the employee
    post:
    Admin can add document to employee's account
    """
    serializer_class = DocumentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        query_param = self.request.query_params['user_id']
        queryset = Document.objects.filter(user_id=query_param)
        return queryset
