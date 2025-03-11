import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { NotfoundComponent } from './notfound/notfound/notfound.component';
import { PagesComponent } from './home/pages/pages/pages.component';
import { ContractFormComponent } from './features/contracts/components/contract-form/contract-form.component';
import { ContractListComponent } from './features/contracts/components/contract-list/contract-list.component';
import { ContractsComponent } from './features/contracts/components/contracts/contracts.component';
import { NotificationService } from './core/services/notification/notification.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirigir a Home por defecto
  { path: 'contractFormulario', component: ContractFormComponent },
  { path: 'contractList', component: ContractListComponent },
  { path: 'contracts/new', component: ContractsComponent },
   {path: 'notifications', component: NotificationService}
  { path: 'notfound', component: NotfoundComponent },
  { path: 'home', component: PagesComponent },
  { path: '**', component: NotfoundComponent }, // Capturar rutas inválidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
