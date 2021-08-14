from django.shortcuts import render

def home(request):
    return render(request, 'escapetherabbithole.html')



def new_search(request):
    # this will be connected via button later
    return render(request, 'Main/new_search.html')
