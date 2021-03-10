# Generated by Django 3.1.7 on 2021-03-10 21:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('covid', '0005_auto_20210309_2059'),
    ]

    operations = [
        migrations.CreateModel(
            name='HSESwab',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_hpsc', models.DateField()),
                ('hospitals', models.IntegerField()),
                ('totallabs', models.IntegerField()),
                ('nonhospitals', models.IntegerField()),
                ('positive', models.IntegerField()),
                ('prate', models.FloatField()),
                ('test24', models.IntegerField()),
                ('test7', models.IntegerField()),
                ('pos7', models.IntegerField()),
                ('posr7', models.FloatField()),
                ('fid', models.IntegerField()),
            ],
            options={
                'db_table': 'hse_swabs',
                'ordering': ['-date_hpsc'],
            },
        ),
        migrations.AlterModelOptions(
            name='hsecounty',
            options={'ordering': ['countyname']},
        ),
    ]