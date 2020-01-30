from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError
from rest_framework import serializers

from adminprofile.models import AdminProfile
from emails.models import Email
from registration.models import Registration

User = get_user_model()


def email_does_not_exist(email):
    try:
        User.objects.get(email=email)
        raise ValidationError(message='This email is taken')
    except User.DoesNotExist:
        return email


def email_does_exist(email):
    try:
        User.objects.get(email=email)
        return email
    except User.DoesNotExist:
        raise ValidationError(message='User does not exist!')


def username_does_not_exist(username):
    try:
        User.objects.get(username=username)
        raise ValidationError(message='This username is taken')
    except User.DoesNotExist:
        return username


def code_is_valid(code):
    try:
        reg_profile = Registration.objects.get(code=code)
        if not reg_profile.code_used:
            return code
        else:
            raise ValidationError(message='This code has already been used!')
    except Registration.DoesNotExist:
        raise ValidationError(message='This code is not valid!')


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

        # Create new adminprofile instance
        new_adminprofile = AdminProfile(
            user=new_user
        )
        new_adminprofile.save()

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


class RegistrationValidationSerializer(serializers.Serializer):
    email = serializers.EmailField(label='Registration E-Mail Address', validators=[email_does_exist])
    username = serializers.CharField(label='Username', validators=[username_does_not_exist])
    code = serializers.CharField(label='Validation code', write_only=True, validators=[code_is_valid])
    password = serializers.CharField(label='password', write_only=True)
    password_repeat = serializers.CharField(label='password_repeat', write_only=True)
    first_name = serializers.CharField(label='First name')
    last_name = serializers.CharField(label='Last name')


    def validate(self, data):
        code = data.get('code')
        email = data.get('email')
        user = User.objects.get(email=email)
        registration = Registration.objects.get(code=code)
        if registration != user.registration:
            raise ValidationError(message='The code does not belong to this email!')
        if data.get('password') != data.get('password_repeat'):
            raise ValidationError(message='Passwords do not match!')
        return data

    def save(self, validated_data):
        email = validated_data.get('email')
        user = User.objects.get(email=email)
        user.username = validated_data.get('username')
        user.first_name = validated_data.get('first_name')
        user.last_name = validated_data.get('last_name')
        user.location = validated_data.get('location')
        user.is_active = True
        user.set_password(validated_data.get('password'))
        user.registration.code_used = True
        user.save()
        user.registration.save()
        # TODO ask what this is for?
        #post_user_registration_validation.send(sender=User, user=user)
        return user