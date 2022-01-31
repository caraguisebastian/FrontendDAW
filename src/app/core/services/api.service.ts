import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiURL = environment.apiURL;

  constructor(private readonly httpClient: HttpClient) { }

  get<T>(path: string, params = {}): Observable<any> {
    return this.httpClient.get<T>(`${this.apiURL}${path}`,{params})
  }

  put<T>(path: string, body = {}): Observable<any> {
    return this.httpClient.put<T>(`${this.apiURL}${path}`, body)
  }

  post<T>(path: string, body = {}): Observable<any> {
    return this.httpClient.post<T>(`${this.apiURL}${path}`, body)
  }

  delete<T>(path: string): Observable<any> {
    return this.httpClient.delete<T>(`${this.apiURL}${path}`)
  }
}
