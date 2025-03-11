// src/app/services/notification.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Contract } from '../../../models/Contract.model';


interface EmailNotification {
  to: string;
  subject: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = 'api/notifications';

  constructor(private http: HttpClient) { }

  sendNotification(notification: EmailNotification): Observable<boolean> {
    // En una aplicación real:
    // return this.http.post<{success: boolean}>(this.apiUrl, notification)
    //   .pipe(map(response => response.success));
    
    // Para demostración:
    console.log('Enviando notificación:', notification);
    return of(true);
  }

  sendExpirationNotification(contract: Contract): Observable<boolean> {
    const expirationDate = new Date(contract.expirationDate).toLocaleDateString();
    
    const notification: EmailNotification = {
      to: contract.clientEmail,
      subject: `Recordatorio de Vencimiento de Contrato: ${contract.description}`,
      body: `
        Estimado/a ${contract.clientName},
        
        Este es un recordatorio amistoso de que su contrato para "${contract.description}" 
        vencerá el ${expirationDate}.
        
        Por favor contáctenos si desea discutir opciones de renovación.
        
        ¡Gracias por su confianza!
        
        Saludos cordiales,
        Su Empresa
      `
    };
    
    return this.sendNotification(notification);
  }

  checkExpiringContracts(contracts: Contract[]): Contract[] {
    const today = new Date();
    const sevenDaysFromNow = new Date();
    sevenDaysFromNow.setDate(today.getDate() + 7);
    
    return contracts.filter(contract => {
      const expDate = new Date(contract.expirationDate);
      return expDate > today && expDate <= sevenDaysFromNow;
    });
  }
}