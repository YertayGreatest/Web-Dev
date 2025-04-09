from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.company_list, name='companies-list'),
    path('companies/<int:pk>/', views.company_detail, name='company-details'),
    
    path('companies/<int:id>/vacancies/', views.VacanciesByCompany.as_view(), name='vacancies-by-company'),
    path('vacancies/', views.ListAllVacancies.as_view(), name='vacancies-list'),
    path('vacancies/<int:id>/', views.VacancyDetails.as_view(), name='vacancy-details'),
    path('vacancies/top_ten/', views.Top_10_Vacancies, name='top-10-vacancies')
]
