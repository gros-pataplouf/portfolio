from django.contrib import admin
from parler.admin import TranslatableAdmin #tbc
from django.forms import TextInput, Textarea
from django.db import models

from .models import Skill, WorkExperience, Education, Project

# Register your models here.

admin.site.register(Skill, TranslatableAdmin)
admin.site.register(WorkExperience, TranslatableAdmin)
admin.site.register(Education, TranslatableAdmin)
admin.site.register(Project, TranslatableAdmin)

