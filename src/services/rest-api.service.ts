import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ResponseDetails } from 'src/models/response';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  
  apiURL = 'http://localhost:2400';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getBalance(): Observable<ResponseDetails> {
     return this.http.get<ResponseDetails>(this.apiURL + '/api/v1/balance');
  }

  getIbanDetails(iban:String): Observable<ResponseDetails> {
    return this.http.get<ResponseDetails>(this.apiURL + '/api/v1/bank/'+iban);
  }

  transferMoneyToIban(iban:String,transferAmount:number): Observable<ResponseDetails> {
    const v = {amount:transferAmount,currency:'AED'};
    return this.http.post<ResponseDetails>(this.apiURL + '/api/v1/transfer/'+iban, v, this.httpOptions);
  }

}