# Generated by Django 4.2.4 on 2023-08-06 09:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio_app', '0014_alter_skill_skill_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='skill',
            name='proficiency',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
    ]