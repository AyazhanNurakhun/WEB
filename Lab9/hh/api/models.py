from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=100, default='')
    description = models.TextField(max_length=200, default='')
    city = models.CharField(max_length=20, default='')
    address = models.TextField(max_length=200, default='')

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address,

        }


class Vacancy(models.Model):
    name = models.CharField(max_length=100, default='')
    description = models.TextField(max_length=200, default='')
    salary = models.FloatField(default=0)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary
        }