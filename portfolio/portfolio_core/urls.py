from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve
from django.conf.urls.i18n import i18n_patterns #tbc
from django.conf.urls import include #tbc
from django.urls import re_path #tbc
from django.utils.translation import gettext_lazy as _

urlpatterns = i18n_patterns(
    path('admin/', admin.site.urls),
    path('rosetta/', include('rosetta.urls')),
    path('', include('portfolio_app.urls')),
)



urlpatterns += static(settings.STATIC_URL, serve, document_root=settings.STATIC_ROOT)

urlpatterns += [
    path('captcha/', include('captcha.urls')),
]

# if 'rosetta' in settings.INSTALLED_APPS:
#     urlpatterns += [
#         re_path(r'^rosetta/', include('rosetta.urls'))
#     ]



# urlpatterns = i18n_patterns(
#     path(_('admin/'), admin.site.urls),
#     path('rosetta/', include('rosetta.urls')),
#     path('', include('course.urls')),
# )
