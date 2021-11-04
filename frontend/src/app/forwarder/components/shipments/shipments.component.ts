import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public numTotalGain!: number;

  public createMode = false;
  public form!: FormGroup;

  private id!: number;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.id = id;
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

  // create mode
  showCreate(): void{
    this.form = this.buildForm();
    this.createMode = !this.createMode;
  }

  private buildForm(): FormGroup{
    return this.formBuilder.group({
      company_id: ['', Validators.maxLength(5)],
      c_containers: ['', Validators.maxLength(5)],
      zarpe_at: Date.now()
    })
  };

  createShipment(event: Event){
    event.preventDefault();
    const value = this.form.value;

    this.dataService.createShipment(value).subscribe((res:any) =>{

      if(value.company_id == this.id){

        this.shipments.unshift({
          company_id: value.company_id,
          c_containers: value.c_containers,
          shipment_id: this.shipments.length,
          zarpe_at: Date.now(),
          arrival_at: Date.now()
        })
      }
      
    });
  }

}
