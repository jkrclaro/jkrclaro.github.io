from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='landingpage.html')),
    path('bookshelf/', include('johnclaro.bookshelf.urls'), name='bookshelf')
]
