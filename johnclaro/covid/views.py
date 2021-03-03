import logging
from django.shortcuts import render
from django.http import JsonResponse

from .models import Covid

logger = logging.getLogger(__name__)


def show_covid(request):
    covids = Covid.objects.all()
    return render(request, 'covid.html', {'covids': covids})


def upsert_covid(request):
    logger.info(request)
    if request.method == 'POST':
        Covid.objects.upsert_covid(
            date=request.POST.get('date'),
            country=request.POST.get('country'),
            cases=request.POST.get('cases'),
            deaths=request.POST.get('deaths'),
            recoveries=request.POST.get('recoveries')
        )
        return JsonResponse({'status': 'Successfully upserted covid data'})
    else:
        return JsonResponse({'status': 'Got GET request'})
