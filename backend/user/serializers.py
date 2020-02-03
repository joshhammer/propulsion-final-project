from django.contrib.auth import get_user_model
from rest_framework import serializers

from salary.serializers import SalarySerializer

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class UserLimitedSerializer(serializers.ModelSerializer):
    salary = SalarySerializer()

    class Meta:
        model = User
        fields = ['salary', 'email', 'first_name', 'last_name', 'bank_name', 'ahv', 'iban', 'house_number', 'street',
                  'city', 'postal_code', 'country', 'company']

