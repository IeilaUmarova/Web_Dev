from .models import Company, Vacancy
from rest_framework import serializers

class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = '__all__'

class CompanySerializer(serializers.ModelSerializer):
    vacancies = VacancySerializer(many = True, read_only = True)

    class Meta:
        model = Company
        fields = '__all__'

class TopTenVacancySerializer(serializers.Serializer):
    name = serializers.CharField()
    description = serializers.CharField()
    salary = serializers.FloatField()
    company = serializers.PrimaryKeyRelatedField(queryset=Company.objects.all())
