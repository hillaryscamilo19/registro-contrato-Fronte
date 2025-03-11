import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContractService} from '../../../../core/services/contracts/contracts.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contract } from '../../../../models/Contract.model';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.css'],
})
export class ContractFormComponent {
  @Input() contract: Contract | null = null;
  @Output() contractAdded = new EventEmitter<Contract>();
  @Output() contractUpdated = new EventEmitter<Contract>();
  
  contractForm: FormGroup;
  dialogOpen = false;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private contractService: ContractService,
    public dialog: MatDialog
  ) {
    this.contractForm = this.createForm();
  }

  ngOnInit(): void {
    if (this.contract) {
      this.contractForm.patchValue({
        clientName: this.contract.clientName,
        clientEmail: this.contract.clientEmail,
        description: this.contract.description,
        startDate: this.contract.startDate,
        expirationDate: this.contract.expirationDate
      });
    }
  }

  createForm(): FormGroup {
    return this.fb.group({
      clientName: ['', [Validators.required]],
      clientEmail: ['', [Validators.required, Validators.email]],
      description: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      expirationDate: ['', [Validators.required]]
    });
  }

  openDialog(): void {
    this.dialogOpen = true;
    if (!this.contract) {
      this.resetForm();
    }
  }

  closeDialog(): void {
    this.dialogOpen = false;
  }

  resetForm(): void {
    this.contractForm.reset();
    this.contract = null;
  }

  onSubmit(): void {
    if (this.contractForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    const formValue = this.contractForm.value;

    if (this.contract) {
      // Actualizar contrato existente
      this.contractService.updateContract(this.contract.id, formValue).subscribe(
        updatedContract => {
          this.contractUpdated.emit(updatedContract);
          this.isSubmitting = false;
          this.closeDialog();
        },
        error => {
          console.error('Error al actualizar contrato:', error);
          this.isSubmitting = false;
        }
      );
    } else {
      // Crear nuevo contrato
      this.contractService.addContract(formValue).subscribe(
        newContract => {
          this.contractAdded.emit(newContract);
          this.isSubmitting = false;
          this.closeDialog();
        },
        error => {
          console.error('Error al crear contrato:', error);
          this.isSubmitting = false;
        }
      );
    }
  }
}
