from .views import VacancyListApiView, VacancyDetailApiView, company_list, CompanyDetailApiView,company_vacancies, top_ten_vacancies
from django.urls import path
from .views import TopTenVacancy

urlpatterns = [
    path('vacancy/', VacancyListApiView.as_view(), name = 'vacancy-list'),
    path('vacancy/<int:pk>/', VacancyDetailApiView.as_view(), name = "vacancy-detail"),
    path('company/', company_list),
    path('company/<int:pk>/', CompanyDetailApiView.as_view(), name = 'company-detail'),
    path('company/<int:id>/vacancy', company_vacancies),
    path('vacancy/top-ten', top_ten_vacancies),
]