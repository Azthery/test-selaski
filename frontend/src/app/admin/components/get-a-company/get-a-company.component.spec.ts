import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetACompanyComponent } from './get-a-company.component';

describe('GetACompanyComponent', () => {
  let component: GetACompanyComponent;
  let fixture: ComponentFixture<GetACompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetACompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetACompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
