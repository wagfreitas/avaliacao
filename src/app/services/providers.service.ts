import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  baseUrl = 'https://6093061685ff5100172141cb.mockapi.io/api/v1/';
  token: any;
  users: any;

  constructor(private http: HttpClient) { }


  public getExtrato(): Observable<any> {
    return this.http.get(this.baseUrl + 'extrato');
  }

  public login():  Observable<any>{
    return this.http.get(this.baseUrl + 'login');
  }

  public getToken() {
  	return !!localStorage.getItem('token');
  }

}
