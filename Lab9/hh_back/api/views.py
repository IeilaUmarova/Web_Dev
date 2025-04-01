from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status, generics
from .models import Company, Vacancy
from .serializers import VacancySerializer, CompanySerializer

class VacancyListApiView(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancyDetailApiView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class CompanyListApiView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyDetailApiView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyVacancyApiView(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        company_id = self.kwargs['id']
        return Vacancy.objects.filter(company_id = company_id)
    
@api_view(['GET'])
def TopTenVacancy(request):
    vacancies = Vacancy.objects.filter(is_active = True).order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many = True)
    return Response(serializer.data)

