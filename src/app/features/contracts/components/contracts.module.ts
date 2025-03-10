import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import { ContractsRoutingModule } from '../contracts-routing.module';
import { ContractListComponent } from '../components/contract-list/contract-list.component';
import { ContractFormComponent } from '../components/contract-form/contract-form.component'
import { ContractsComponent } from './contracts/contracts.component';


@NgModule({
  declarations: [],
  imports: [
  CommonModule,
   FormsModule,
    BrowserModule,
   ContractsRoutingModule,
   ContractListComponent,
   ContractFormComponent,
   ContractsComponent
  ]
})
export class ContractsModule { }

