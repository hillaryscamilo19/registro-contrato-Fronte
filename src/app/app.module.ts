import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { ContractListComponent } from './features/contracts/components/contract-list/contract-list.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from './material.module';  

@NgModule({
  declarations: [  // Agregar aquí componentes NO standalone
     
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    // Importamos el componente standalone
    ContractListComponent, 

    // Angular Material
    MatPaginatorModule,
    [MatIconModule],
   [MatDialogModule],
    MatInputModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatDialogActions,
    MatDialogClose,
    MaterialModule,
    MatDialogContent,
    MatDialogTitle,
    MatNativeDateModule,
    MatFormFieldModule
  ],
  providers: [
    
  ],

})
export class AppModule { }
