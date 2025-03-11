import { Component } from '@angular/core';
import { Contract } from '../../../../../models/Contract.model';
import { ContractService } from '../../../../../core/services/contracts/contracts.service';
import { NotificationService } from '../../../../../core/services/notification/notification.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contractdashboard',
  imports: [],
  templateUrl: './contractdashboard.component.html',
  styleUrl: './contractdashboard.component.css'
})
export class ContractdashboardComponent {
  contracts: Contract[] = [];
  activeContracts: Contract[] = [];
  expiringContracts: Contract[] = [];
  expiredContracts: Contract[] = [];
  isLoading = true;
  selectedTabIndex = 0;

  constructor(
    private contractService: ContractService,
    private notificationService: NotificationService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loadContracts();
  }

  loadContracts(): void {
    this.isLoading = true;
    this.contractService.getContracts().subscribe(
      contracts => {
        this.contracts = contracts;
        this.filterContracts();
        this.isLoading = false;
      },
      error => {
        console.error('Error al cargar contratos:', error);
        this.snackBar.open('No se pudieron cargar los contratos. Intente nuevamente.', 'Cerrar', {
          duration: 5000,
          panelClass: ['error-snackbar']
        });
        this.isLoading = false;
      }
    );
  }

  filterContracts(): void {
    this.activeContracts = this.contracts.filter(c => c.status === 'active');
    this.expiringContracts = this.contracts.filter(c => c.status === 'expiring-soon');
    this.expiredContracts = this.contracts.filter(c => c.status === 'expired');
  }

  onContractAdded(contract: Contract): void {
    this.contracts.push(contract);
    this.filterContracts();
    this.snackBar.open(`Nuevo contrato para ${contract.clientName} ha sido creado.`, 'Cerrar', {
      duration: 3000
    });
  }

  onContractUpdated(updatedContract: Contract): void {
    const index = this.contracts.findIndex(c => c.id === updatedContract.id);
    if (index !== -1) {
      this.contracts[index] = updatedContract;
      this.filterContracts();
      this.snackBar.open(`El contrato para ${updatedContract.clientName} ha sido actualizado.`, 'Cerrar', {
        duration: 3000
      });
    }
  }

  onContractDeleted(id: string): void {
    this.contracts = this.contracts.filter(c => c.id !== id);
    this.filterContracts();
    this.snackBar.open('El contrato ha sido eliminado del sistema.', 'Cerrar', {
      duration: 3000
    });
  }

  getContractsForTab(tabIndex: number): Contract[] {
    switch (tabIndex) {
      case 0: return this.contracts;
      case 1: return this.activeContracts;
      case 2: return this.expiringContracts;
      case 3: return this.expiredContracts;
      default: return this.contracts;
    }
  }

  onTabChange(event: any): void {
    this.selectedTabIndex = event.index;
  }

}
