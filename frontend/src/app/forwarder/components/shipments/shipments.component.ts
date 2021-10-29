import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { company } from 'src/app/core/models/company.model';
import { DataService } from 'src/app/core/services/data/data.service';

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipment.components.scss']
})
export class ShipmentsComponent implements OnInit {

  public shipments!: any[];
  numTotalGain!: number;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchCompanyInfo(id);
      this.totalGain(id);
    });
  }

  fetchCompanyInfo(id: number){
    this.dataService.shipmentsForIdCompany(id)
      .subscribe( (data: any) =>{ 
        this.shipments = data
      })
  }

  totalGain(id: number):void{
    this.dataService.loot(id)
    .subscribe( (res: any) => {
      this.numTotalGain = res[0].total_gain;
    })
  }

}
