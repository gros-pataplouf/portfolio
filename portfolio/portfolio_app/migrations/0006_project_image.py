# Generated by Django 4.2.2 on 2023-06-29 12:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio_app', '0005_rename_compagny_workexperience_company_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='image',
            field=models.ImageField(default='null.jpeg', upload_to=''),
            preserve_default=False,
        ),
    ]
