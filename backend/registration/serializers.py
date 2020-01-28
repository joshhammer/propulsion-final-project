from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError
from rest_framework import serializers

from emails.models import Email
from registration.models import Registration

User = get_user_model()


def email_does_not_exist(email):
    try:
        User.objects.get(email=email)
        raise ValidationError(message='This email is taken')
    except User.DoesNotExist:
        return email


# This serializer is only for admin user!!!!!
class RegistrationSerializer(serializers.Serializer):
    email = serializers.EmailField(label='Registration E-Mail Address', validators=[email_does_not_exist])

    def save(self, validated_data):
        email = validated_data.get('email')
        new_user = User(
            username=email,
            email=email,
            is_active=False,
        )
        new_user.save()

        registration = Registration(
            user=new_user,
            code_type='RV',
            profile_type='AP',
        )
        registration.save()

        email = Email(to=email, subject='Thank you for registering with RazzPay!',
                      content=f'Here is your validation code: {registration.code}')
        email.save(request=self.context['request'])
        return new_user