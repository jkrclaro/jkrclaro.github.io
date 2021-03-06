import logging
from django.shortcuts import render
from django.http import JsonResponse

from .models import Case

logger = logging.getLogger(__name__)


def show_covid(request):
    cases = Case.objects.all()
    return render(request, 'covid.html', {'cases': cases})


def case_upsert(request):
    logger.info(request)
    if request.method == 'POST':
        Case.objects.upsert_covid(
            date=request.POST.get('date'),
            country=request.POST.get('country'),
            cases=request.POST.get('cases'),
            deaths=request.POST.get('deaths'),
            recoveries=request.POST.get('recoveries')
        )
        return JsonResponse({'status': 'Case upserted'})
    else:
        return JsonResponse(status=404)
