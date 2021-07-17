import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProducServiceService {
  // constructor() { }
  public ProductDataSource$ = new BehaviorSubject<Array<any>>([]);
  baseURL: string = 'https://60efed10f587af00179d3b82.mockapi.io/api/';
  constructor(private http: HttpClient) {}
  public getProduc(): Observable<any> {
    return this.http.get(this.baseURL + 'products');
  }
}