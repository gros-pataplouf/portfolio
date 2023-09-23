# Generated by Django 4.2.5 on 2023-09-22 15:22

from django.db import migrations, models
import django.db.models.deletion
import parler.fields
import parler.models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio_app', '0015_alter_skill_proficiency'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='education',
            name='description',
        ),
        migrations.RemoveField(
            model_name='education',
            name='edu_type',
        ),
        migrations.RemoveField(
            model_name='education',
            name='end_date',
        ),
        migrations.RemoveField(
            model_name='education',
            name='name',
        ),
        migrations.RemoveField(
            model_name='education',
            name='school',
        ),
        migrations.RemoveField(
            model_name='education',
            name='skills',
        ),
        migrations.RemoveField(
            model_name='education',
            name='start_date',
        ),
        migrations.RemoveField(
            model_name='project',
            name='deployment',
        ),
        migrations.RemoveField(
            model_name='project',
            name='description',
        ),
        migrations.RemoveField(
            model_name='project',
            name='github',
        ),
        migrations.RemoveField(
            model_name='project',
            name='image',
        ),
        migrations.RemoveField(
            model_name='project',
            name='name',
        ),
        migrations.RemoveField(
            model_name='project',
            name='skills',
        ),
        migrations.RemoveField(
            model_name='skill',
            name='name',
        ),
        migrations.RemoveField(
            model_name='skill',
            name='proficiency',
        ),
        migrations.RemoveField(
            model_name='skill',
            name='rating',
        ),
        migrations.RemoveField(
            model_name='skill',
            name='skill_type',
        ),
        migrations.RemoveField(
            model_name='workexperience',
            name='company',
        ),
        migrations.RemoveField(
            model_name='workexperience',
            name='description',
        ),
        migrations.RemoveField(
            model_name='workexperience',
            name='end_date',
        ),
        migrations.RemoveField(
            model_name='workexperience',
            name='job_title',
        ),
        migrations.RemoveField(
            model_name='workexperience',
            name='place',
        ),
        migrations.RemoveField(
            model_name='workexperience',
            name='skills',
        ),
        migrations.RemoveField(
            model_name='workexperience',
            name='start_date',
        ),
        migrations.CreateModel(
            name='WorkExperienceTranslation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('language_code', models.CharField(db_index=True, max_length=15, verbose_name='Language')),
                ('job_title', models.CharField(max_length=250)),
                ('company', models.CharField(max_length=250)),
                ('place', models.CharField(max_length=250)),
                ('start_date', models.DateField(verbose_name='start date')),
                ('end_date', models.DateField(blank=True, null=True, verbose_name='end date')),
                ('description', models.CharField(blank=True, max_length=500, null=True)),
                ('master', parler.fields.TranslationsForeignKey(editable=False, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='translations', to='portfolio_app.workexperience')),
                ('skills', models.ManyToManyField(to='portfolio_app.skill')),
            ],
            options={
                'verbose_name': 'work experience Translation',
                'db_table': 'portfolio_app_workexperience_translation',
                'db_tablespace': '',
                'managed': True,
                'default_permissions': (),
                'unique_together': {('language_code', 'master')},
            },
            bases = (parler.models.TranslatableModel, models.Model),
        ),

        migrations.CreateModel(
            name='SkillTranslation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('language_code', models.CharField(db_index=True, max_length=15, verbose_name='Language')),
                ('name', models.CharField(max_length=250)),
                ('skill_type', models.CharField(choices=[('Coding', 'Coding'), ('Tooling', 'Tooling'), ('Databases', 'Databases'), ('Others', 'Others'), ('Languages', 'Languages'), ('Soft Skills', 'Soft Skills')], max_length=50)),
                ('proficiency', models.CharField(blank=True, max_length=500, null=True)),
                ('rating', models.IntegerField(blank=True, null=True)),
                ('master', parler.fields.TranslationsForeignKey(editable=False, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='translations', to='portfolio_app.skill')),
            ],
            options={
                'verbose_name': 'skill Translation',
                'db_table': 'portfolio_app_skill_translation',
                'db_tablespace': '',
                'managed': True,
                'default_permissions': (),
                'unique_together': {('language_code', 'master')},
            },
            bases = (parler.models.TranslatableModel, models.Model),
        ),
        migrations.CreateModel(
            name='ProjectTranslation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('language_code', models.CharField(db_index=True, max_length=15, verbose_name='Language')),
                ('name', models.CharField(max_length=250)),
                ('github', models.URLField()),
                ('deployment', models.URLField(blank=True, null=True)),
                ('description', models.CharField(max_length=250)),
                ('image', models.CharField(blank=True, max_length=50, null=True)),
                ('master', parler.fields.TranslationsForeignKey(editable=False, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='translations', to='portfolio_app.project')),
                ('skills', models.ManyToManyField(to='portfolio_app.skill')),
            ],
            options={
                'verbose_name': 'project Translation',
                'db_table': 'portfolio_app_project_translation',
                'db_tablespace': '',
                'managed': True,
                'default_permissions': (),
                'unique_together': {('language_code', 'master')},
            },
            bases = (parler.models.TranslatableModel, models.Model),
        ),
        migrations.CreateModel(
            name='EducationTranslation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('language_code', models.CharField(db_index=True, max_length=15, verbose_name='Language')),
                ('name', models.CharField(max_length=250)),
                ('edu_type', models.CharField(choices=[('diploma', 'diploma'), ('certificate', 'certificate'), ('studying', 'studying')], max_length=250)),
                ('school', models.CharField(max_length=250)),
                ('start_date', models.DateField(blank=True, null=True, verbose_name='start date')),
                ('end_date', models.DateField(blank=True, null=True, verbose_name='end date')),
                ('description', models.CharField(blank=True, max_length=250, null=True)),
                ('master', parler.fields.TranslationsForeignKey(editable=False, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='translation', to='portfolio_app.education')),
                ('skills', models.ManyToManyField(to='portfolio_app.skill')),
            ],
            options={
                'verbose_name': 'education Translation',
                'db_table': 'portfolio_app_education_translation',
                'db_tablespace': '',
                'managed': True,
                'default_permissions': (),
                'unique_together': {('language_code', 'master')},
            },
            bases = (parler.models.TranslatableModel, models.Model),
        ),
    ]