import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './components/companies/companies.component';
import { ShipmentsComponent } from './components/shipments/shipments.component';

const routes: Routes = [
  {
  path: '',
  component: CompaniesComponent,
  },
  {
      path: ':id',
      component: ShipmentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForwarderRoutingModule { }
