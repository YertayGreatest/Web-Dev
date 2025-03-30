from django.shortcuts import render
from rest_framework import generics
from .models import Category, Product
from .serializers import ProductSerializer, CategorySerializer
# from django.http import HttpResponse


# def home(request):
#     return HttpResponse('shop backe homepage')



# List all products
class ProductsList(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    

# get one product
class ProductDetail(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'id'
    

# list all categories    
class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer    
    

# get one category
class CategoryDetail(generics.RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'id'
    
# list products by category    
class ProductsByCategory(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        category_id = self.kwargs['id']
        return Product.objects.filter(category_id=category_id)
    


