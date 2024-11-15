from django.contrib import admin
from django.urls import path, re_path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from djangoreactstarter.views.auth import SignupView
from djangoreactstarter.views.views import health_check, index_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('health_check', health_check, name='health_check'),
    path('health_check/', health_check, name='health_check'),
    path('api/signup/', SignupView.as_view(), name='signup'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    re_path(r'^.*$', index_view, name='index'),
]
