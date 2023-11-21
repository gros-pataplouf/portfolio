from django.db import models
from django.contrib import admin
from parler.models import TranslatableModel, TranslatedFields
from django.utils.translation import gettext_lazy as _


class Skill(TranslatableModel):
    translations = TranslatedFields(
        name = models.CharField(max_length=250),
        skill_type = models.CharField(max_length=50, choices=[("Languages", _("Languages")), ("Frontend", _("Frontend")), ("Backend", _("Backend")), ("Databases", _("Databases")), ("Tooling", _("Tooling")), ("Webdesign", _("Webdesign")), ("Other", _("Other"))]),
        proficiency = models.TextField(max_length=500, null=True, blank=True),
        rating = models.IntegerField(null=True, blank=True),
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
