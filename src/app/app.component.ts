import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContractsComponent } from "./features/contracts/components/contracts/contracts.component";
import { ContractdashboardComponent } from './features/contracts/components/contractdashboard/contractdashboard/contractdashboard.component';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContractsComponent, ContractdashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Registro De Contratos';
}
