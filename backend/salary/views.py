from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated

from salary.models import Salary
from salary.permissions import IsAdminOrReadOnly
from salary.serializers import SalarySerializer


class GetMySalary(ListAPIView):
    serializer_class = SalarySerializer
    queryset = Salary.objects.all()
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = Salary.objects.filter(user_id=self.request.user.id)
        return queryset


class RetrieveUpdateDestroySalary(RetrieveUpdateDestroyAPIView):
    """
    get:
    Get the details of a salary by providing the id of the restaurant (admin only)
    patch:
    Admin updates salary
    delete:
    Admin deletes restaurant
    """
    queryset = Salary.objects.all()
    serializer_class = SalarySerializer
    permission_classes = [IsAdminOrReadOnly]
    #permission_classes = [IsAuthenticated]

    # Returns single salary by id
    # TODO return salary by user id!
    lookup_url_kwarg = 'user_id'


