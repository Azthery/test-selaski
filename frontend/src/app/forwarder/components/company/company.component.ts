import { Component, Input, OnInit } from '@angular/core';
import { company } from 'src/app/core/models/company.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  @Input()
  company!: company;

  constructor() { }

  ngOnInit(): void {
  }

}
