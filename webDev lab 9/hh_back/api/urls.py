from django.urls import path
from .views import ListAllCompanies, CompanyDetails, VacanciesByCompany, ListAllVacancies, VacancyDetails, Top_10_Vacancies


urlpatterns = [
    path('companies/', ListAllCompanies.as_view(), name='companies-list'),
    path('companies/<int:id>/', CompanyDetails.as_view(), name='company-details'),
    path('companies/<int:id>/vacancies/', VacanciesByCompany.as_view(), name='vacancies-by-company'),
    path('vacancies/', ListAllVacancies.as_view(), name='vacancies-list'),
    path('vacancies/<int:id>/', VacancyDetails.as_view(), name='vacancy-details'),
    path('vacancies/top_ten/', Top_10_Vacancies.as_view(), name='top-10-vacancies')
]
