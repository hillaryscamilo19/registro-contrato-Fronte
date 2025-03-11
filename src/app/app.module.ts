import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // <-- IMPORTANTE
import { ContractListComponent } from './features/contracts/components/contract-list/contract-list.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';







@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    ContractListComponent,
    MatPaginatorModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatPaginator,
    HttpClientModule,
  [MatSnackBarModule]
  ],
  
  providers: [],
})
export class AppModule { }
