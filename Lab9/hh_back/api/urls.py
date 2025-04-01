from .views import VacancyListApiView, VacancyDetailApiView, CompanyListApiView, CompanyDetailApiView, CompanyVacancyApiView
from django.urls import path
from .views import TopTenVacancy

urlpatterns = [
    path('vacancies/', VacancyListApiView.as_view(), name = 'vacancy-list'),
    path('vacancies/<int:pk>/', VacancyDetailApiView.as_view(), name = 'vacancy-detail'),
    path('companies/', CompanyListApiView.as_view(), name = 'company-list'),
    path('companies/<int:pk>/', CompanyDetailApiView.as_view(), name = 'company-detail'),
    path('companies/<int:id>/vacancies/', CompanyVacancyApiView.as_view(), name = 'company-vacancy'),
    path('vacancies/top_ten/', TopTenVacancy, name = 'top-ten-vacancy')
]