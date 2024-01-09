import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
  imagem: string;
}
export interface NewUsuario {
  nome: string;
  email: string;
  senha: string;
  imagem: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000/user';
  usuarioLogado: any;

  constructor(private http: HttpClient) { }

  getUser(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }
  login(email: string, senha: string): Observable<Usuario[]> {
    const params = { email, senha };
    const result = this.http.get<Usuario[]>(this.apiUrl, { params });
    return result;
  }

  postUser(userData: NewUsuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, userData);
  }
  editarUsuario(id: number, nome: string, email: string, imagem: string, senha: string): Observable<Usuario> {
    const userData = { nome, email, imagem };
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Usuario>(url, userData);
  }
  setUsuarioLogado(usuario: Usuario) {
    this.usuarioLogado = usuario;
  }

  getUsuarioLogado() {
    return this.usuarioLogado;
  }
}
