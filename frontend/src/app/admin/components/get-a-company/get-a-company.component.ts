import { Component, Input, OnInit } from '@angular/core';
import { company } from 'src/app/core/models/company.model';
import { AdminService } from 'src/app/core/services/admin/admin.service';

@Component({
  selector: 'app-get-a-company',
  templateUrl: './get-a-company.component.html',
  styleUrls: ['./get-a-company.component.scss']
})
export class GetACompanyComponent implements OnInit {

  @Input()
  company!: company;
  obtained!: boolean;
  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.inPossessionOrNot();
  }

  inPossessionOrNot():void {
    const storageUserId = localStorage.getItem('user_id');
    const companyUserId = this.company.user_id?.toString();
    this.obtained = (storageUserId === companyUserId);
  }
 
  get(): void{
    const userId = localStorage.getItem('user_id')
    const data = {
      "user_id": userId,
      "company_id": this.company.company_id
    };
    this.adminService.getACompany(data)
    .subscribe((res:any) => {
      this.obtained = true
    });
  }

  drop(): void{
    const data = {
      "user_id": 0,
      "company_id": this.company.company_id
    };
    this.adminService.getACompany(data)
    .subscribe((res:any) => {
      this.obtained = false;
    });
  }

}
