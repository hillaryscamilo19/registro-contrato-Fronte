import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractListComponent } from './features/contracts/components/contract-list/contract-list.component';

// Components


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '/home', component: ContractListComponent },
  {  },
  {
    path: 'dashboard',
    children: [
      {  },
      {  },
      {  },
      {  }
    ]
  },
  {
    
  },
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }