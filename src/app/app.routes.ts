import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContractListComponent } from './features/contracts/components/contract-list/contract-list.component';
import { PagesComponent } from './home/pages/pages/pages.component';

export const routes: Routes = [
    {path: 'home', component: PagesComponent}

];
export class AppRoutes {}