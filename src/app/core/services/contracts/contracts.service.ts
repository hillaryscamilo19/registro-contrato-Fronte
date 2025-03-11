// src/app/services/contract.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Contract } from '../../../models/Contract.model';


@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private apiUrl = 'api/contracts';
  
  // Datos de ejemplo para demostración
  private mockContracts: Contract[] = [
    {
      id: "1",
      clientName: "Acme Corporation",
      clientEmail: "contact@acme.com",
      description: "Mantenimiento y hosting de sitio web",
      startDate: "2023-01-15",
      expirationDate: "2024-01-15",
      status: "active",
      contractNumber: ''
    },
    {
      id: "2",
      clientName: "TechStart Inc",
      clientEmail: "admin@techstart.com",
      description: "Servicios de desarrollo de software",
      startDate: "2023-03-10",
      expirationDate: "2023-12-10",
      status: "expiring-soon",
      contractNumber: ''
    },
    {
      id: "3",
      clientName: "Global Solutions",
      clientEmail: "info@globalsolutions.com",
      description: "Servicios de consultoría IT",
      startDate: "2022-11-05",
      expirationDate: "2023-11-05",
      status: "expired",
      contractNumber: ''
    }
  ];

  constructor(private http: HttpClient) { }

  getContracts(): Observable<Contract[]> {
    // En una aplicación real, usaríamos:
    // return this.http.get<Contract[]>(this.apiUrl);
    
    // Para demostración, usamos datos mock
    return of(this.mockContracts).pipe(
      map(contracts => contracts.map(contract => ({
        ...contract,
        status: this.getContractStatus(contract.expirationDate)
      })))
    );
  }

  getContract(id: string): Observable<Contract> {
    // En una aplicación real:
    // return this.http.get<Contract>(`${this.apiUrl}/${id}`);
    
    // Para demostración:
    const contract = this.mockContracts.find(c => c.id === id);
    if (contract) {
      return of({
        ...contract,
        status: this.getContractStatus(contract.expirationDate)
      });
    }
    return throwError(() => new Error('Contrato no encontrado'));
  }

  addContract(contract: Omit<Contract, 'id' | 'status'>): Observable<Contract> {
    // En una aplicación real:
    // return this.http.post<Contract>(this.apiUrl, contract);
    
    // Para demostración:
    const newId = (this.mockContracts.length + 1).toString();
    const newContract: Contract = {
      ...contract,
      id: newId,
      status: this.getContractStatus(contract.expirationDate)
    };
    
    this.mockContracts.push(newContract);
    return of(newContract);
  }

  updateContract(id: string, contract: Omit<Contract, 'id' | 'status'>): Observable<Contract> {
    // En una aplicación real:
    // return this.http.put<Contract>(`${this.apiUrl}/${id}`, contract);
    
    // Para demostración:
    const index = this.mockContracts.findIndex(c => c.id === id);
    if (index !== -1) {
      const updatedContract: Contract = {
        ...contract,
        id,
        status: this.getContractStatus(contract.expirationDate)
      };
      
      this.mockContracts[index] = updatedContract;
      return of(updatedContract);
    }
    return throwError(() => new Error('Contrato no encontrado'));
  }

  deleteContract(id: string): Observable<boolean> {
    // En una aplicación real:
    // return this.http.delete(`${this.apiUrl}/${id}`).pipe(
    //   map(() => true),
    //   catchError(() => of(false))
    // );
    
    // Para demostración:
    const initialLength = this.mockContracts.length;
    this.mockContracts = this.mockContracts.filter(c => c.id !== id);
    return of(this.mockContracts.length < initialLength);
  }

  getContractStatus(expirationDate: string): Contract['status'] {
    const today = new Date();
    const expDate = new Date(expirationDate);
    
    if (expDate < today) {
      return "expired";
    }
    
    // Verificar si vence en 30 días
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(today.getDate() + 30);
    
    if (expDate <= thirtyDaysFromNow) {
      return "expiring-soon";
    }
    
    return "active";
  }
}