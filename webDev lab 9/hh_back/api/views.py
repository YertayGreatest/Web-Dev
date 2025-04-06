from django.shortcuts import render
from rest_framework import generics
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

# all companies
class ListAllCompanies(generics.ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    
# company by ID
class CompanyDetails(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_field = 'id'
    
# Vacancies by company
class VacanciesByCompany(generics.ListAPIView):
    serializer_class = VacancySerializer
    
    def get_queryset(self):
        company_id = self.kwargs['id']
        return Vacancy.objects.filter(company_id=company_id)
    
    
# all vacancies
class ListAllVacancies(generics.ListAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    
# vacancy by id
class VacancyDetails(generics.RetrieveAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    lookup_field = 'id'
    
# top 10 vacancies by decreasing salary
class Top_10_Vacancies(generics.ListAPIView):
    serializer_class = VacancySerializer
    
    def get_queryset(self):
        return Vacancy.objects.order_by('-salary')[:10]
