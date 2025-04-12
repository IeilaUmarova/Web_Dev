import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/company';
import { CompanyService } from '../../services/company.service';
import { Vacancy } from '../../models/vacancy';

@Component({
  selector: 'app-company-list',
  imports: [],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  vacancies: Vacancy[] = [];
  selectedCompanyId: number | null = null;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((data) => {
      this.companies = data;
    });
  }

  showVacancies(companyId: number): void {
    this.selectedCompanyId = companyId;
    this.companyService.getCompanyVacancies(companyId).subscribe((data) => {
      this.vacancies = data;
    });
  }
}
