import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private apiUrl = 'http://localhost:8080/categorias';

  constructor(private http: HttpClient) { }

  listarCategorias(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
