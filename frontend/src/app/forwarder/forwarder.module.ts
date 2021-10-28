import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForwarderRoutingModule } from './forwarder-routing.module';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyComponent } from './components/company/company.component';
import { CreateShipmentComponent } from './components/create-shipment/create-shipment.component';
import { ShipmentComponent } from './components/shipment/shipment.component';


@NgModule({
  declarations: [
    CompaniesComponent,
    CompanyComponent,
    CreateShipmentComponent,
    ShipmentComponent
  ],
  imports: [
    CommonModule,
    ForwarderRoutingModule
  ]
})
export class ForwarderModule { }
