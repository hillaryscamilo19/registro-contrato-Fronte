import { Component } from '@angular/core';
import { ContractsService } from '../../../../core/services/contracts/contracts.service';

@Component({
  selector: 'app-contract-list',
  imports: [],
  templateUrl: './contract-list.component.html',
  styleUrl: './contract-list.component.css'
})
export class ContractListComponent {
  contracts: any[] = [];

  constructor(private contractsService: ContractsService) {}

  ngOnInit() {
    this.loadContracts();
  }

  loadContracts() {
    this.contractsService.getContracts().subscribe((data) => {
      this.contracts = data;
    });
  }
}
