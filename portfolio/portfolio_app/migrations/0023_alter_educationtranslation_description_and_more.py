# Generated by Django 4.2.5 on 2023-10-22 16:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio_app', '0022_educationtranslation_result_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='educationtranslation',
            name='description',
            field=models.TextField(blank=True, max_length=2000, null=True),
        ),
        migrations.AlterField(
            model_name='skilltranslation',
            name='proficiency',
            field=models.TextField(blank=True, max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='workexperiencetranslation',
            name='description',
            field=models.TextField(blank=True, max_length=2000, null=True),
        ),
    ]
