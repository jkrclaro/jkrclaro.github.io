# Generated by Django 3.1.7 on 2021-03-09 20:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('covid', '0003_auto_20210309_2054'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hsecounty',
            name='fid',
            field=models.IntegerField(),
        ),
    ]