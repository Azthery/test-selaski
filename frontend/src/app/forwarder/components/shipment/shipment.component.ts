import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { shipment } from 'src/app/core/models/shipment.model';
import { DataService } from 'src/app/core/services/data/data.service';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})
export class ShipmentComponent implements OnInit {
  
  public form!: FormGroup;
  private commission = 5;
  public gain !:number;
  public status!:any;
  public id!:any;
  public editMode = false;
  @Input()
  public shipment!: shipment;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) { }
  
  ngOnInit(): void {
    this.status = this.shipment.finshed;
    this.id = this.shipment.shipment_id;
    this.gain = this.commission * this.shipment.c_containers;
  }

  showEdit(): void{
    this.editMode = !this.editMode;
    this.form = this.buildForm();
  }

  private buildForm(): FormGroup{
    const shipment = this.shipment;
    console.log(shipment);
    return this.formBuilder.group({
      company_id: [shipment.company_id, Validators.maxLength(5)],
      c_containers: [shipment.c_containers, Validators.maxLength(5)],
      zarpe_at: [shipment.zarpe_at],
      arrival_at: [shipment.arrival_at],
      finshed: [this.status, [Validators.required]],
      active: [1 , [Validators.required]],
      shipment_id: [this.id, [Validators.required]],
    })
  };
  
  editshipment(event: Event){
    event.preventDefault();
    const value = this.form.value;

    this.dataService.editshipment(value).subscribe( (res: any) => {
      this.shipment.c_containers = value.c_containers;
      this.shipment.zarpe_at = value.zarpe_at;
      this.shipment.arrival_at = value.arrival_at;
      this.gain = this.commission * this.shipment.c_containers

      this.editMode = false;
    });
  }

  updateStatusShip(){
    this.status = this.status ? 0 : 1;
    const data = {"finshed": this.status, "shipment_id": this.shipment.shipment_id}
    this.dataService.updateStatusShip(data).subscribe( (res: any) => {
      if(res){}
    });
  }
}
