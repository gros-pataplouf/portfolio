# Generated by Django 4.2.2 on 2023-07-29 17:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio_app', '0011_education_description_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='education',
            name='edu_type',
            field=models.CharField(choices=[('diploma', 'diploma'), ('certificate', 'certificate'), ('studying', 'studying')], max_length=250),
        ),
    ]