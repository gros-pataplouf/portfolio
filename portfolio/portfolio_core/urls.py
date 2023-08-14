from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve


urlpatterns = [
    path("", include("portfolio_app.urls")),
    path("admin/", admin.site.urls),
   
]

urlpatterns += static(settings.STATIC_URL, serve, document_root=settings.STATIC_ROOT)

urlpatterns += [
    path('captcha/', include('captcha.urls')),
]
