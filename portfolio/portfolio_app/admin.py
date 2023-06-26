from django.contrib import admin
from .models import Skill, WorkExperience, Education, Project

# Register your models here.

admin.site.register(Skill)
admin.site.register(WorkExperience)
admin.site.register(Education)
admin.site.register(Project)

