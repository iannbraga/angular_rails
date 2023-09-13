import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private baseURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  login(email: string, senha: string): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseURL}/logar`, { email, senha });
  }

  cadastrar(email: string, senha: string, perfil: string): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseURL}/cadastrar`, { email, senha, perfil });
  }
}
