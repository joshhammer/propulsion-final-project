from django.contrib.auth import get_user_model
from rest_framework import serializers

from company.serializers import CompanySerializer
from registration.serializers import RegistrationProfileTypeSerializer
from salary.serializers import SalarySerializer

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class UserProfileTypeSerializer(serializers.ModelSerializer):
    registration = RegistrationProfileTypeSerializer()
    company=CompanySerializer()
    salary = SalarySerializer()

    class Meta:
        model = User
        fields = ['salary', 'company', 'registration', 'id', 'email', 'first_name', 'last_name', 'bank_name', 'ahv', 'iban', 'house_number', 'street', 'city', 'postal_code', 'country', 'phone']


class UserLimitedSerializer(serializers.ModelSerializer):
    salary = SalarySerializer()

    class Meta:
        model = User
        fields = ['salary', 'id', 'email', 'first_name', 'last_name', 'bank_name', 'ahv', 'iban', 'house_number', 'street',
                  'city', 'postal_code', 'country', 'company', 'phone']


class UserTestSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ['email']
