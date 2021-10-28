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

  companies(): any{
    this.dataService.companies().
    subscribe((res:any) => {
      this.companiesList = res;
    });
  }

  company(): void{
    const id = 1;
    this.dataService.company(id)
    .subscribe( (res:any) =>{
      console.log(res)
    })
  }
}
