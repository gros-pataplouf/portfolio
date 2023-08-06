# Generated by Django 4.2.2 on 2023-06-30 07:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio_app', '0007_alter_project_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='deployment',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='image',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]