from django.db import models

from mongoengine import Document, fields

# Create your models here.
class Movie(Document):
    name = fields.StringField(required=True)
    description = fields.StringField(required=True)
    duration = fields.DynamicField(required=True)
    stars = fields.StringField(required=True)
    types = fields.StringField(required=True)
    director = fields.StringField(required=True)
    img = fields.StringField(required=True)
    def __str__(self):
        return self.name

class BookTicket(Document):
    idCustomer = fields.StringField(required=True)
    idMovie = fields.StringField(required=True)
    time = fields.DynamicField(required=True)
    totalPrice = fields.DynamicField(required=True)
    def __str__(self):
        return self.id

# Normal db

# class Movie(models.Model):
#     name = models.CharField(max_length=60)
#     description = models.CharField(max_length=60)
#     duration = models.FloatField(default=130)
#     stars = models.CharField(max_length=60, default='SOME STRING')
#     types = models.CharField(max_length=60, default='SOME STRING')
#     director = models.CharField(max_length=60, default='SOME STRING')
#     img = models.CharField(max_length=60, default='SOME STRING')
#     def __str__(self):
#         return self.name


# class BookTicket(models.Model):
#     idCustomer = models.CharField(max_length=60)
#     # cineme = Cinema
#     ticketPrice = models.FloatField()
#     def __str__(self):
#         return self.name

class Cinema(models.Model):
    seat = models.CharField(max_length=60)
    idMovie = models.CharField(max_length=60)
    movieShow = models.CharField(max_length=60) #timestamp
    def __str__(self):
        return self.name

class Customer(models.Model):
    name = models.CharField(max_length=60)
    def __str__(self):
        return self.name

class Payment(models.Model):
    idCustomer = models.CharField(max_length=60)
    amount = models.FloatField()
    def __str__(self):
        return self.id
        