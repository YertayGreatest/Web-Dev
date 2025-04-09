import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company';
import { Vacancy } from './vacancy';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private baseUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  // ----Company----

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.baseUrl}companies/`);
  }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.baseUrl}companies/${id}/`);
  }

  // createCompany, updateCompany, deleteCompany

  // ----Vacancy----

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.baseUrl}vacancies/`);
  }

  getVacancy(id: number): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.baseUrl}vacancies/${id}/`);
  }

  getVacanciesByCompany(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.baseUrl}companies/${companyId}/vacancies/`);
  }

  getTopTenVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.baseUrl}vacancies/top_ten/`);
  }
 
  // createVacancy, updateVacancy, deleteVacancy 
}