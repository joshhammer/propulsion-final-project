from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from salary.models import Salary
from salary.permissions import IsAdmin
from salary.serializers import SalarySerializer


# Old method returned salary info as array rather than object
# class GetMySalary(ListAPIView):
#     serializer_class = SalarySerializer
#     queryset = Salary.objects.all()
#     permission_classes = [IsAuthenticated]
#
#     def get_queryset(self):
#         queryset = Salary.objects.filter(user_id=self.request.user.id)
#         return queryset


class GetMySalary(RetrieveAPIView):
    """
    get:
    Logged in employee can view user profile
    """
    serializer_class = SalarySerializer
    queryset = Salary.objects.all()
    permission_classes = [IsAuthenticated]

    def retrieve(self, request, *args, **kwargs):
        instance = Salary.objects.get(user_id=self.request.user.id)
        serializer = self.get_serializer(instance)
        return Response(serializer.data)


class RetrieveUpdateDestroySalary(RetrieveUpdateDestroyAPIView):
    """
    get:
    Get the details of a salary by providing the id of the salary (admin only)
    patch:
    Admin updates salary
    delete:
    Admin deletes restaurant
    """
    queryset = Salary.objects.all()
    serializer_class = SalarySerializer
    permission_classes = [IsAdmin]
    #permission_classes = [IsAuthenticated]

    # Returns single salary by id
    # TODO return salary by user id!
    lookup_field = 'user_id'
    #lookup_url_kwarg = 'user_id'

    # def get_queryset(self):
    #     queryset = Salary.objects.get(user_id=self.lookup_url_kwarg)
    #     return queryset


