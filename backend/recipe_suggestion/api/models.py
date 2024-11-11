from django.db import models


class Ingredient(models.Model):
    name = models.CharField(max_length=200)
    quantity = models.CharField(max_length=200)
    unit = models.CharField(max_length=200)

    def __str__(self):
        return self.name
    
class Step(models.Model):
    description = models.CharField(max_length=200)

    def __str__(self):
        return self.description

# Create your models here.
class Recipe(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    ingredient = models.ManyToManyField(Ingredient)
    step = models.ManyToManyField(Step)
    cooking_time = models.IntegerField()
    difficulty = models.CharField(max_length=200)
    image_url = models.CharField(max_length=200)
    
    def __str__(self):
        return self.title
    