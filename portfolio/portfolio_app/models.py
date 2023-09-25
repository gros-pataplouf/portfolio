from django.db import models
from django.contrib import admin
from parler.models import TranslatableModel, TranslatedFields
from django.utils.translation import gettext_lazy as _


class Skill(TranslatableModel):
    translations = TranslatedFields(
        name = models.CharField(max_length=250),
        skill_type = models.CharField(max_length=50, choices=[("Languages", _("Languages")), ("Coding", _("Coding")), ("Frontend", _("Frontend")), ("Backend", _("Backend")), ("Databases", _("Databases")), ("Tooling", _("Tooling")), ("Providers", _("Providers")), ("Other", _("Other"))]),
        proficiency = models.CharField(max_length=500, null=True, blank=True),
        rating = models.IntegerField(null=True, blank=True),
        )
    def __str__(self):
        return self.name

class WorkExperience(TranslatableModel):
    translations = TranslatedFields(
        job_title = models.CharField(max_length=250),
        company = models.CharField(max_length=250),
        place = models.CharField(max_length=250),
        start_date = models.DateField("start date"),
        end_date = models.DateField("end date", null=True, blank=True),
        skills = models.ManyToManyField(Skill),
        description = models.CharField(max_length=500, null=True, blank=True),
    )
    def __str__(self):
        return self.job_title

class Education(TranslatableModel):
    translation = TranslatedFields(
        name = models.CharField(max_length=250),
        edu_type = models.CharField(choices=[("diploma", "diploma"), ("certificate", "certificate"), ("studying", "studying")], max_length=250),
        school = models.CharField(max_length=250),
        start_date = models.DateField("start date", null=True, blank=True),
        end_date = models.DateField("end date", null=True, blank=True),
        skills = models.ManyToManyField(Skill),
        description = models.CharField(max_length=250, null=True, blank=True),
    )
    def __str__(self):
        return self.name

   
class Project(TranslatableModel):
    translations = TranslatedFields(
        name = models.CharField(max_length=250),
        github = models.URLField(),
        deployment = models.URLField(blank=True, null=True),
        skills = models.ManyToManyField(Skill),
        description = models.CharField(max_length=250),
        image = models.CharField(max_length=50, blank=True, null=True),
    )
    def __str__(self):
        return self.name
