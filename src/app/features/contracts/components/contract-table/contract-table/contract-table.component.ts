import { Component, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Contract } from '../../../../../models/Contract.model';
import { formatDate } from '@angular/common';
import { ContractService } from '../../../../../core/services/contracts/contracts.service';
import { ContractFormComponent } from '../../contract-form/contract-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-contract-table',
  imports: [],
  templateUrl: './contract-table.component.html',
  styleUrl: './contract-table.component.css'
})
export class ContractTableComponent {
  @Input() contracts: Contract[] = [];
  @Output() contractUpdated = new EventEmitter<Contract>();
  @Output() contractDeleted = new EventEmitter<string>();
  
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  
  displayedColumns: string[] = ['clientName', 'description', 'startDate', 'expirationDate', 'status', 'actions'];
  dataSource: MatTableDataSource<Contract>;

  constructor(
    private contractService: ContractService,
    private dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource<Contract>([]);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['contracts']) {
      this.dataSource.data = this.contracts;
      
      // Configurar paginador y ordenamiento después de que los datos cambien
      setTimeout(() => {
        if (this.paginator) {
          this.dataSource.paginator = this.paginator;
        }
        if (this.sort) {
          this.dataSource.sort = this.sort;
        }
      });
    }
  }

  formatDate(date: string): string {
    return formatDate(date, 'dd/MM/yyyy', 'es');
  }

  getStatusText(status: Contract['status']): string {
    switch (status) {
      case 'active': return 'Activo';
      case 'expiring-soon': return 'Por Vencer';
      case 'expired': return 'Vencido';
      default: return '';
    }
  }

  getStatusClass(status: Contract['status']): string {
    switch (status) {
      case 'active': return 'status-active';
      case 'expiring-soon': return 'status-expiring';
      case 'expired': return 'status-expired';
      default: return '';
    }
  }

  editContract(contract: Contract): void {
    const dialogRef = this.dialog.open(ContractFormComponent, {
      width: '600px',
      data: { contract }
    });

    dialogRef.componentInstance.contractUpdated.subscribe((updatedContract: Contract | undefined) => {
      this.contractUpdated.emit(updatedContract);
    });
  }

  deleteContract(id: string): void {
    if (confirm('¿Está seguro que desea eliminar este contrato?')) {
      this.contractService.deleteContract(id).subscribe(
        success => {
          if (success) {
            this.contractDeleted.emit(id);
          }
        },
        error => {
          console.error('Error al eliminar contrato:', error);
        }
      );
    }
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
