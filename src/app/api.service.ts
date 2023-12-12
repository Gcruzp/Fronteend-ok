import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  API_URL = 'https://theofficeapi.dev/api/characters';

  constructor(private http: HttpClient) { }

  public getCharacters(): Observable<any[]> {
    
    const params = new HttpParams()
      .set('limit', '81');

    return this.http.get<any>(this.API_URL, { params }).pipe(
      map(response => response['results'])
    );
  }
}
