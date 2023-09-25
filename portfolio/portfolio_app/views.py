from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect

from django.shortcuts import render
from django.core.mail import send_mail
from datetime import date
from .models import Skill, WorkExperience, Project, Education
from .forms import ContactForm
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
import logging

from parler.utils import get_active_language_choices


from portfolio_core.settings import EMAIL_HOST_USER, EMAIL_DEST
# import the logging library

# Get an instance of a logger
logger = logging.getLogger(__name__)


# Create your views here.

def index(request):
    return render(request, "portfolio_app/intro.html")

def recruiters(request):
    return render(request, "portfolio_app/recruiters.html")


def bio(request):

    def sort_by_date(item):
        return list(item.keys())[0]
    work_history = WorkExperience.objects.all()
    education = Education.objects.all()
    work_by_date = [{item.end_date if item.end_date is not None else date.today(): item} for item in work_history]
    education_by_date = [{item.end_date if item.end_date is not None else date.today(): item} for item in education]
    all_by_date = work_by_date + education_by_date
    all_by_date.sort(key=sort_by_date, reverse=True)
    context = {
        "all_by_date": all_by_date
    }
    return render(request, "portfolio_app/bio.html", context)
    
def skills(request):
    # preferred_language = request.META['HTTP_ACCEPT_LANGUAGE'].split(",")[0]
    skills = Skill.objects.all().order_by("translations__skill_type").distinct()
    context = {
        "skills": skills,
    }
    return render(request, "portfolio_app/skills.html", context)

def projects(request):
    skills = Skill.objects.all()
    projects = Project.objects.all()
    context = {
        "projects": projects,
        "skills": skills
    }
    return render(request, "portfolio_app/projects.html", context)



def work(request):
    work_history = WorkExperience.objects.order_by("end_date")
    context = {
        "work_history": work_history,
    }
    return render(request, "portfolio_app/work.html", context)

def education(request):
    education = Education.objects.order_by("end_date")
    context = {
        "education": education,
    }
    return render(request, "portfolio_app/education.html", context)


def contact(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            send_mail(
                f"A new message from {request.POST['email']}",
                f"{request.POST['message']}",                                
                EMAIL_HOST_USER,
                [EMAIL_DEST],
                fail_silently=False,
                )
            return HttpResponseRedirect("/thanks/")
      
        else:
            print(form.errors)
            return render(request, "portfolio_app/contact.html", {"form": form})

    else:
        form = ContactForm(empty_permitted=False)


    return render(request, "portfolio_app/contact.html", {"form": form})


def thanks(request):
    return render(request, "portfolio_app/thanks.html")

def not_found(request):
    return render(request, "portfolio_app/not_found.html")