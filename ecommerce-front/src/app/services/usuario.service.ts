import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseURL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  logar(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseURL}/login.json`);
  }
}
