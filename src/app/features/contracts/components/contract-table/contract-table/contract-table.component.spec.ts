import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractTableComponent } from './contract-table.component';

describe('ContractTableComponent', () => {
  let component: ContractTableComponent;
  let fixture: ComponentFixture<ContractTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
