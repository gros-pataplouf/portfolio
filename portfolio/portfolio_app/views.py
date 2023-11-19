from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.core.mail import send_mail
from datetime import date
from .models import Skill, WorkExperience, Project, Education
from .forms import ContactForm
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from parler.managers import TranslatableQuerySet

import logging

from parler.utils import get_active_language_choices

from portfolio_core.settings import EMAIL_HOST_USER, EMAIL_DEST
# import the logging library

# Get an instance of a logger
logger = logging.getLogger(__name__)

# Create your views here.

def index(request):
    return render(request, "portfolio_app/intro.html")

def bio(request):

    def sort_by_date(item):
        return list(item.keys())[0]
    work_history = WorkExperience.objects.all()
    education = Education.objects.all()
    work_by_date = [{item.end_date if item.end_date is not None else date.today(): item} for item in work_history]
    education_by_date = [{item.end_date if item.end_date is not None else date.today(): item} for item in education]
    all_by_date =   work_by_date + education_by_date
    all_by_date.sort(key=sort_by_date)
    context = {
        "all_by_date": all_by_date
    }
    return render(request, "portfolio_app/bio.html", context)
    
def skills(request):
    skills = Skill.objects.all().order_by("translations__skill_type").distinct()
    context = {
        "skills": skills,
    }
    return render(request, "portfolio_app/skills.html", context)

def projects(request):
    error = None
    query_dict = request.GET.dict()
    queried_skills = query_dict.get("skills")
    # queried_skills = set(map(lambda item: int(item), list(request.GET.dict().keys())))
    all_skills = set()
    projects = Project.objects.all()
    for project in projects:
        for skill in project.skills.all():
            all_skills.add(skill)
    if queried_skills:
        projects = []
        validated_skills = []
        skill_array = queried_skills.split(",")
        try:
            validated_skills = set(map(lambda item: int(item), skill_array))
        except Exception as e:
            error = e
            print(error)
        for project in Project.objects.all():
            skill_ids = set(project.skills.values_list("id", flat=True))
            if set(validated_skills) & skill_ids and len(validated_skills) == len(set(validated_skills) & skill_ids):
                projects.append(project)

    context = {
        "projects": projects,
        "skills": all_skills, 
        "error": error
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