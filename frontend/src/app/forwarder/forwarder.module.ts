import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForwarderRoutingModule } from './forwarder-routing.module';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyComponent } from './components/company/company.component';
import { CreateShipmentComponent } from './components/create-shipment/create-shipment.component';
import { ShipmentsComponent } from './components/shipments/shipments.component';
import { ShipmentComponent } from './components/shipment/shipment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateCompanyComponent } from './components/create-company/create-company.component';


@NgModule({
  declarations: [
    CompaniesComponent,
    CompanyComponent,
    CreateShipmentComponent,
    ShipmentsComponent,
    ShipmentComponent,
    CreateCompanyComponent
  ],
  imports: [
    CommonModule,
    ForwarderRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ForwarderModule { }
