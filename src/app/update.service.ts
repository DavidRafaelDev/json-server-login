import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Update {
  'idProduto': number,
  "nome": string,
  "data": Date | string | null,
  "id"?: number,
}

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  private apiUrl = 'http://localhost:3000/update';

  constructor(private http: HttpClient) { }
  postUpdate(data: Update): Observable<Update> {
    return this.http.post<Update>(this.apiUrl, data);
  }
  getUpdates(id: number): Observable<Update> {
    const url = `${this.apiUrl}?idProduto=${id}`;
    return this.http.get<Update>(url);
  }
}
