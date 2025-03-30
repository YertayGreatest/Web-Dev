from django.urls import path
from .views import ProductsList, ProductDetail, CategoryDetail, CategoryList, ProductsByCategory #, api_root

urlpatterns = [
    # path('', api_root, name='api-root'),
    
    path('products/', ProductsList.as_view(), name='products-list'),
    path('products/<int:id>/', ProductDetail.as_view(), name='product-detail'),
    path('categories/', CategoryList.as_view(), name='category-list'),
    path('categories/<int:id>/', CategoryDetail.as_view(), name='category-detail'),
    path('categories/<int:id>/products/', ProductsByCategory.as_view(), name='products-category')

]
