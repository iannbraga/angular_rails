import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private baseURL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  findAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.baseURL}/produtos.json`);
  }

  findById(id: string): Observable<Produto> {
    return this.http.get<Produto>(`${this.baseURL}/produtos/${id}.json`);
  }

  save(estado: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${this.baseURL}/produtos.json`, estado);
  }

  update(estado: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.baseURL}/produtos/${estado.id}.json`, estado );
  }

  delete(estado: Produto): Observable<any> {
    return this.http.delete<Produto>(`${this.baseURL}/produtos/${estado.id}.json`);
  }

}
