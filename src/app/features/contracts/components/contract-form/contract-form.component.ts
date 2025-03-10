import { Component } from '@angular/core';
import { ContractsService } from '../../../../core/services/contracts/contracts.service';

@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.css'],
})
export class ContractFormComponent {
  newContract = { clientName: '', clientEmail: '', startDate: '', endDate: '' };

  constructor(private contractsService: ContractsService) {}

  addContract() {
    this.contractsService.addContract(this.newContract).subscribe(() => {
      alert('Contrato agregado con éxito');
      this.newContract = { clientName: '', clientEmail: '', startDate: '', endDate: '' };
    });
  }
}
