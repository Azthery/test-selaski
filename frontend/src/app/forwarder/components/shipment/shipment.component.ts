import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})
export class ShipmentComponent implements OnInit {

  @Input()
  public shipment: any;
  constructor() { }

  ngOnInit(): void {
  }

}
