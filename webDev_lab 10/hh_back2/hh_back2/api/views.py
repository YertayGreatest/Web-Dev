from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view


# -----Function based-----

@api_view(['GET', 'POST'])
def company_list(request):
    #  LIST ALL COMPANIES OR CREATE NEW COMPANY
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
@api_view(['GET', 'PUT', 'DELETE'])    
def company_detail(request, pk):
    #   RETRIEVE | UPDATE | DELETE A COMPANY
    company = get_object_or_404(Company, pk=pk)
    
    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = CompanySerializer(company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        company.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    
    
# -----Class based-----
    
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
@api_view(['GET'])
def Top_10_Vacancies(request):
    """serializer_class = VacancySerializer
    
    def get_queryset(self):
        return Vacancy.objects.order_by('-salary')[:10]
    """
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)
    
    
    

