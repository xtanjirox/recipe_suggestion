from django.contrib import admin
from .models import Ingredient, Step, Recipe
# Register your models here.

admin.site.register(Ingredient)
admin.site.register(Step)
admin.site.register(Recipe)