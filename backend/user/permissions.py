from rest_framework import permissions


class IsAdminUser(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):

        # If user requesting is admin of the same company employee works at
        if obj.company == request.user.company and obj.company == request.user.adminprofile.company:
            return True
        else:
            return False