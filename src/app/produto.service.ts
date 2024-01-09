import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Produto {
  id: number,
  nome: string,
  categoria: string,

}
@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private apiUrl = 'http://localhost:3000/produto';

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  getProdutoPorId(id: number): Observable<Produto> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Produto>(url);
  }

  adicionarProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, produto);
  }

  editarProduto(produto: Produto): Observable<Produto> {
    const url = `${this.apiUrl}/${produto.id}`;
    return this.http.put<Produto>(url, produto);
  }

  excluirProduto(id: number): Observable<Produto> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Produto>(url);
  }
}
