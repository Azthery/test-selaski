import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { GetACompanyComponent } from './components/get-a-company/get-a-company.component';


@NgModule({
  declarations: [
    AdminComponent,
    GetACompanyComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
