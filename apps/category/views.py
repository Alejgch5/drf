from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Category

class ListCategoriesView(APIView):
    def get(self, request, format=None):
        categories = Category.objects.all()
        if not categories.exists():
            return Response({'error': 'No categories found'}, status=status.HTTP_404_NOT_FOUND)

        result = []
        parent_categories = categories.filter(parent__isnull=True)

        for category in parent_categories:
            item = {
                'id': category.id,
                'name': category.name,
                'slug': category.slug,
                'views': category.views,
                'sub_categories': []
            }

            children = categories.filter(parent=category)
            for sub_category in children:
                sub_item = {
                    'id': sub_category.id,
                    'name': sub_category.name,
                    'slug': sub_category.slug,
                    'views': sub_category.views
                }
                item['sub_categories'].append(sub_item)

            result.append(item)

        return Response({'categories': result}, status=status.HTTP_200_OK)
