import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IClient } from 'src/app/model/IClient.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  
  private URL: string = 'http://localhost:3000/clients';

  constructor(private http: HttpClient) { }

  getClients(): Observable<IClient[]> {
    return this.http.get<IClient[]>(this.URL);
  }

  createClient(client: IClient): Observable<IClient> {
    return this.http.post<IClient>(this.URL, client);
  }

  deleteClient(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/${id}`);
  }

  updateClient(client: IClient): Observable<IClient> {
    return this.http.put<IClient>(`${this.URL}/${client.id}`, client);
  }

  getClient(id: number): Observable<IClient> {
    return this.http.get<IClient>(`${this.URL}/${id}`);
  }
}
