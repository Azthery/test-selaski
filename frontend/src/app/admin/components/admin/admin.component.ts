import { Component, OnInit } from '@angular/core';
import { company } from 'src/app/core/models/company.model';
import { AdminService } from 'src/app/core/services/admin/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  allCompanies!: company[];
  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.getAllCompanies();
  }

  getAllCompanies(): void{
    this.adminService.allCompanies().subscribe((res: any) =>this.allCompanies = res);
  }

}
