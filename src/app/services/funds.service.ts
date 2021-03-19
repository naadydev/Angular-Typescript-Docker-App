import { IFund, IUserInvestment } from './../models/fund.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FundsService {
  constructor(private http: HttpClient) { }

  getFundById(id: number): Observable<IFund> {
    return this.http.get<IFund>(`${environment.apiUrl}/funds/${id}`)
  }

  getAllActiveFunds(): Observable<IFund[]> {
    return this.http.get<IFund[]>(`${environment.apiUrl}/funds`);
  }

  addUserInvestment(post: IUserInvestment): Observable<IUserInvestment> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<IUserInvestment>(`${environment.apiUrl}/funds`, post, { headers });
  }
}
