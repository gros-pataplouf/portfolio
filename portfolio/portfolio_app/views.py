from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.core.mail import send_mail
from .models import Skill, Project
from .forms import ContactForm
#Load environment variables 

import logging


from portfolio_core.settings import EMAIL_HOST_USER, EMAIL_DEST
# import the logging library

# Get an instance of a logger
logger = logging.getLogger(__name__)

# Create your views here.

def index(request):
    return render(request, "portfolio_app/intro.html")

def bio(request):
    return render(request, "portfolio_app/bio.html")
    
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
    queried_projects = query_dict.get("id")

    all_skills = set()
    projects = Project.objects.all().order_by("translations__github").distinct()
    for project in projects:
        for skill in project.skills.all():
            all_skills.add(skill)
    if queried_skills and queried_projects:
        context  = {
        "projects": [],
        "skills": all_skills, 
        "error": "You cannot filter by both projects and skills."
        }
        return render(request, "portfolio_app/projects.html", context)

    if queried_skills:
        projects = []
        validated_skills = []
        skill_lst = queried_skills.split(",")
        try:
            validated_skills = set(map(lambda item: int(item), skill_lst))
        except Exception as e:
            error = e
        for project in Project.objects.all():
            skill_ids = set(project.skills.values_list("id", flat=True))
            if set(validated_skills) & skill_ids and len(validated_skills) == len(set(validated_skills) & skill_ids):
                projects.append(project)
    elif queried_projects:
        projects = []
        project_id_lst = queried_projects.split(",")
        try:
            validated_ids = set(map(lambda id: int(id), project_id_lst))
            print(validated_ids)
        except Exception as e:
            error = e
        for project in Project.objects.all():
            project_id = project.__dict__['id'] #bad
            if project_id in validated_ids:
                projects.append(project)
    context = {
        "projects": projects,
        "skills": all_skills, 
        "error": error
    }
    return render(request, "portfolio_app/projects.html", context)


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