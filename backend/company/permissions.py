from rest_framework import permissions


# I don't think this is needed, already only a user with an AdminProfile can create a company
# class IsAdminprofile(permissions.BasePermission):
#     def has_object_permission(self, request, view, obj):
#         # For djangoadmin superusers:
#         if request.user.is_superuser:
#             return True
#
#         # # If user requesting is type adminprofile:
#         # if request.user.registration.profile_type is 'AP':
#         #     return True
#         # else:
#         #     return False