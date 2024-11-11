from ninja import Router
from ninja_extra import NinjaExtraAPI, api_controller, ControllerBase, route
from django.http import JsonResponse
from ninja.constants import NOT_SET

from ..models import Recipe

from django.urls import path
from django.contrib import admin
from django.http import JsonResponse

api = NinjaExtraAPI()
router = Router()


@router.get('status')
def health_check(request):
    return JsonResponse({'message': 'OK'})

@api_controller('recipes', auth=NOT_SET, permissions=[])
class RecipeController(ControllerBase):
    @route.get('/get_recipes')
    def get_recipes(self):
        recipes = Recipe.objects.all()
        data = []
        for recipe in recipes:
            ingredients = [ing.name for ing in recipe.ingredient.all()]
            steps = [step.description for step in recipe.step.all()]
            
            recipe_data = {
                "id": recipe.id,
                "title": recipe.title,
                "description": recipe.description,
                "cookingTime": recipe.cooking_time,
                "difficulty": recipe.difficulty,
                "imageUrl": recipe.image_url,
                "ingredients": ingredients,
                "steps": steps
            }
            
            data.append(recipe_data)
        return {
            "data": data
        }
    
    @route.get('/get_recipes/{id}')
    def get_recipes_by_id(self, id):
        recipes = Recipe.objects.filter(pk=id)
        data = []
        for recipe in recipes:
            ingredients = [ing.name for ing in recipe.ingredient.all()]
            steps = [step.description for step in recipe.step.all()]
            
            recipe_data = {
                "id": recipe.id,
                "title": recipe.title,
                "description": recipe.description,
                "cookingTime": recipe.cooking_time,
                "difficulty": recipe.difficulty,
                "imageUrl": recipe.image_url,
                "ingredients": ingredients,
                "steps": steps
            }
            
            data.append(recipe_data)
        return {
            "data": data[0]
        }
       
controllers = [
    RecipeController,
]
 
api.add_router("/",router)
api.register_controllers(*controllers)
      
urlpatterns = [
    path("api/admin/", admin.site.urls),
    path("api/", api.urls),
]