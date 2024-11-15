from django.http import HttpResponse
from django.views.generic import TemplateView
index_view = TemplateView.as_view(template_name="base.html")
def health_check(request):
    return HttpResponse("OK")
