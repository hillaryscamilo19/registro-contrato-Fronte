import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private apiUrl = 'http://localhost:3000/notifications';

  constructor(private http: HttpClient) {}

  sendNotification(contractId: string) {
    return this.http.post(`${this.apiUrl}/send`, { contractId });
  }
}
