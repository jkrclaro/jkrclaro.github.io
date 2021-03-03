# Generated by Django 3.1.7 on 2021-03-03 14:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Covid',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField()),
                ('country', models.CharField(max_length=255)),
                ('state', models.CharField(max_length=255)),
                ('cases', models.IntegerField()),
                ('deaths', models.IntegerField()),
                ('recovered', models.FloatField()),
            ],
            options={
                'db_table': 'covids',
            },
        ),
    ]
