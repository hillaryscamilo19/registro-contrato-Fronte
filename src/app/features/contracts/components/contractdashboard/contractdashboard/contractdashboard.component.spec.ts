import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractdashboardComponent } from './contractdashboard.component';

describe('ContractdashboardComponent', () => {
  let component: ContractdashboardComponent;
  let fixture: ComponentFixture<ContractdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractdashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
