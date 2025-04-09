import { Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';

export const routes: Routes = [
  { path: 'companies', component: CompanyListComponent, title: 'Companies' },
  { path: 'companies/:id/vacancies', component: VacancyListComponent, title: 'Company Vacancies' },
  { path: '', redirectTo: '/companies', pathMatch: 'full' },  
  // may add others
];