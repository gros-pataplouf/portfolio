# Generated by Django 4.2.5 on 2023-10-12 15:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio_app', '0021_alter_educationtranslation_description_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='educationtranslation',
            name='result',
            field=models.CharField(blank=True, max_length=300, null=True),
        ),
        migrations.AddField(
            model_name='workexperiencetranslation',
            name='result',
            field=models.CharField(blank=True, max_length=300, null=True),
        ),
    ]
