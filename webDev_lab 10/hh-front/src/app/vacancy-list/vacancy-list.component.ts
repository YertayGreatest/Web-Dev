import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router'; 
import { Vacancy } from '../vacancy';
import { ApiService } from '../api.service';
import { switchMap } from 'rxjs/operators'; 

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {
  vacancies: Vacancy[] = [];
  companyId: number | null = null;
  isLoading = true;
  error: string | null = null;

  apiService = inject(ApiService);
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    
    this.route.paramMap.pipe(
      switchMap(params => {
        const idParam = params.get('id'); 
        if (idParam) {
          this.companyId = +idParam; 
          this.isLoading = true; 
          this.error = null; 
          
          return this.apiService.getVacanciesByCompany(this.companyId);
        } else {
          
          this.error = 'Company ID not found';
          this.isLoading = false;
          return []; 
        }
      })
    ).subscribe({
      next: (data) => {
        this.vacancies = data;
        this.isLoading = false;
        console.log(`Vacancies for company ${this.companyId} loaded:`, this.vacancies);
      },
      error: (err) => {
        console.error(`Error loading vacancies for company ${this.companyId}:`, err);
        this.error = 'Failed to load vacancies';
        this.isLoading = false;
      }
    });
  }
}