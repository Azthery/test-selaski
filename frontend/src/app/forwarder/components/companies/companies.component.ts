import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data/data.service';
import { company } from 'src/app/core/models/company.model';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})

export class CompaniesComponent implements OnInit {

  public companiesList !:company[];

  constructor(
    private dataService: DataService
  ) { 
    this.companies();
  }

  ngOnInit(): void {
    
  }

  companies(): void{
    this.dataService.companies().
    subscribe((res:company[]) => {
      this.companiesList = res;
    });
  }
  
  buildForm():any {

  }

  createCompany(): void{

  }
}
