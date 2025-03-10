import { RouterModule, Routes } from '@angular/router';
import { ContractListComponent } from './components/contract-list/contract-list.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', component: ContractListComponent}

];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
export class ContractsRoutingModule{ }