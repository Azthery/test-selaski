import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { company } from 'src/app/core/models/company.model';
import { DataService } from 'src/app/core/services/data/data.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})

export class CompanyComponent implements OnInit {

  public form!: FormGroup;
  @Input()
  company!: company;
  public editMode = false;
  public gain!:number[];
  public totalGain!: number;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getTotalGain();
  }

  buildForm(): FormGroup{
    const company = this.company;
    return this.formBuilder.group({
      name: [company.name, Validators.maxLength(20)],
      rut: [company.rut, Validators.maxLength(10)],
      contact_name: [company.contact_name, Validators.maxLength(20)],
      contact_email: [company.contact_email, [Validators.email, Validators.maxLength(20)]],
    })
  }

  editCompany(){
    const value = this.form.value;

    this.dataService.editCompany(value).subscribe( (res: any) => {
      if(res){
        this.company.name = value.name;
        this.company.rut = value.rut;
        this.company.contact_name = value.contact_name;
        this.company.contact_email = value.contact_email;

        this.editMode = false;
      }
    });
  }

  getTotalGain():void{
    this.dataService.loot(this.company.company_id)
    .subscribe( (res: any) => {
      this.totalGain = res[0].total_gain;
    })
  };

  showEdit(): void{
    this.editMode = !this.editMode;
    this.form = this.buildForm();
  }

}
