import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { NotfoundComponent } from './notfound/notfound/notfound.component';
import { PagesComponent } from './home/pages/pages/pages.component';
import { ContractFormComponent } from './features/contracts/components/contract-form/contract-form.component';
import { ContractListComponent } from './features/contracts/components/contract-list/contract-list.component';
import { NotificationsComponent } from './features/contracts/components/notifications/notifications/notifications.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PagesComponent },
  { 
    path: 'contracts', 
    children: [
      { path: '', component: ContractListComponent },
      { path: 'new', component: ContractFormComponent },
      { path: 'edit/:id', component: ContractFormComponent }
    ] 
  },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: 'notfound' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
