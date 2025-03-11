import { TestBed } from '@angular/core/testing';
import { ContractService } from './contracts.service';



describe('ContractsService', () => {
  let service: ContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
