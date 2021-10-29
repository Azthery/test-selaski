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
  
  public form: FormGroup = this.buildForm();
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

    this.form = this.buildForm()
  }

  showEdit(): void{
    this.editMode = !this.editMode;
  }

  private buildForm(): FormGroup{
    return this.formBuilder.group({
      company_id: ['', Validators.maxLength(5)],
      c_containers: ['', Validators.maxLength(5)],
      zarpe_at: [''],
      arrival_at: [''],
      finshed: [this.status, [Validators.required]],
      active: [1 , [Validators.required]],
      shipment_id: [this.id, [Validators.required]],
    })
  };
  
  editshipment(event: Event){
    event.preventDefault();
    const value = this.form.value;
    if(value.c_containers === '') value.c_containers = this.shipment.c_containers;
    if(value.company_id === '') value.company_id = this.shipment.company_id;

    this.dataService.editshipment(value).subscribe( (res: any) => {
      this.shipment.c_containers = value.c_containers;
      this.shipment.zarpe_at = value.zarpe_at;
      this.shipment.arrival_at = value.arrival_at;
      this.gain = this.commission * this.shipment.c_containers

      this.editMode = false;});
  }

  updateStatusShip(){
    this.status = this.status ? 0 : 1;
    const data = {"finshed": this.status, "shipment_id": this.shipment.shipment_id}
    this.dataService.updateStatusShip(data).subscribe( (res: any) => {
      if(res){}
    });
  }
}
