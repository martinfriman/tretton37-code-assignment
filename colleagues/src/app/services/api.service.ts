import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Colleague } from '../models/colleague.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiURL = environment.apiURL;
  private authHeader = environment.authHeader
  private headers = new HttpHeaders();;

  constructor(private http: HttpClient) { 

    this.headers = this.headers.set('Authorization', this.authHeader);

  }

  getAllColleuges() {

    return this.http.get<Colleague[]>(this.apiURL, {headers: this.headers});

  }
}
