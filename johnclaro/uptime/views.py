from django.shortcuts import render
from django.http import JsonResponse

from .helpers import ping


def index(request):
    status = 320
    context = {
        'status': status
    }
    if request.method == 'POST':
        check_rate = request.POST.get('check-rate')
        url = request.POST.get('url')
        print(f'CR: {check_rate} | URL: {url}')
    return render(request, 'uptime/index.html', context)


def do_ping(request, host):
    data = {'status': ping(host)}
    return JsonResponse(data)
