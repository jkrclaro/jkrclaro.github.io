# Generated by Django 3.1.7 on 2021-03-09 20:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('covid', '0004_auto_20210309_2057'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hsecounty',
            name='confirmedcoviddeaths',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='hsecounty',
            name='confirmedcovidrecovered',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='hsecounty',
            name='origid',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
