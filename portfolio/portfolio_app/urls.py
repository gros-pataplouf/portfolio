from django.urls import path, re_path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("bio/", views.bio, name="bio"),
    path("skills/", views.skills, name="skills"),
    path("projects/", views.projects, name="projects"),
    path("work/", views.work, name="work"),
    path("education/", views.education, name="education"),
    path("contact/", views.contact, name="contact"),
    path("thanks/", views.thanks, name="thanks"),

]
