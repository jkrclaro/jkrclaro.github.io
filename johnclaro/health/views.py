from django.shortcuts import render


def pace(request):
    return render(request, 'health/pace.html')


def body_fat(request):
    return render(request, 'health/body_fat.html')
