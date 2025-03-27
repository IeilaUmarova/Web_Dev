from django.urls import path
from .views import ProductDetailApiView, ProductListApiView, CategoryDetailApiView, CategoryListApiView, CategoryProductApiView

urlpatterns = [
    path('products/', ProductListApiView.as_view(), name = 'product_list'),
    path('products/<int:pk>/', ProductDetailApiView.as_view(), name = 'product_detail'),
    path('category/', CategoryListApiView.as_view(), name = 'category_list'),
    path('category/<int:pk>/', CategoryDetailApiView.as_view(), name = 'category_detail'),
    path('category/<int:id>/products/', CategoryProductApiView.as_view(), name = 'category-products')
]