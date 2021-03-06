import logging
from django.shortcuts import render
from django.http import JsonResponse

from .models import JohnHopkins

logger = logging.getLogger(__name__)


def show_covid(request):
    john_hopkins = JohnHopkins.objects.all()
    return render(request, 'covid.html', {'covids': john_hopkins})


def john_hopkins_upsert(request):
    logger.info(request)
    if request.method == 'POST':
        JohnHopkins.objects.upsert_covid(
            date=request.POST.get('date'),
            country=request.POST.get('country'),
            cases=request.POST.get('cases'),
            deaths=request.POST.get('deaths'),
            recoveries=request.POST.get('recoveries')
        )
        return JsonResponse({'status': 'Successfully upserted covid data'})
    else:
        return JsonResponse(status=404)
