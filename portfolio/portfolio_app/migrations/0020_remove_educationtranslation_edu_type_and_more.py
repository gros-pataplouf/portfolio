# Generated by Django 4.2.5 on 2023-09-25 19:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio_app', '0019_alter_skilltranslation_skill_type'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='educationtranslation',
            name='edu_type',
        ),
        migrations.RemoveField(
            model_name='educationtranslation',
            name='skills',
        ),
        migrations.RemoveField(
            model_name='workexperiencetranslation',
            name='company',
        ),
        migrations.RemoveField(
            model_name='workexperiencetranslation',
            name='skills',
        ),
        migrations.AlterField(
            model_name='workexperiencetranslation',
            name='description',
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
    ]
