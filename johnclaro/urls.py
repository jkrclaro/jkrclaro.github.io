from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from django.views.generic import TemplateView
from django.conf import settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='landingpage.html'), name='bio'),
    path('bookshelf/', include('johnclaro.bookshelf.urls', namespace='bookshelf')),
    path('pace/', include('johnclaro.pace.urls', namespace='pace'))
]

if settings.DEBUG:
    urlpatterns += staticfiles_urlpatterns()
    urlpatterns += static('/media/', document_root='media')  # might be wrong
