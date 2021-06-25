import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LiveService {
  private apiUrl =
    'https://60820a0e827b350017cfbaea.mockapi.io/api/v1/itau_teste';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'aplication/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public getLivesWithFlag(flag: string): Observable<Response> {
    return this.httpClient.get<Response>(this.apiUrl + '?flag=' + flag);
  }
}
