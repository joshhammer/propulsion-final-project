from rest_framework import permissions

import record
import user


class IsAdminList(permissions.BasePermission):
    def has_permission(self, request, view):

        # If user requesting is admin an
        if request.user.registration.profile_type == 'AP':
            return True
        else:
            return False