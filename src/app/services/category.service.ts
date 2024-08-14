import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = 'http://localhost:8090/api/cats';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<any>(url);
  }

  get(id: any): Observable<any> {
    return this.http.get<any>(`${url}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(url, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${url}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${url}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(url);
  }

  findByTitle(title: any): Observable<any> {
    return this.http.get<any>(`${url}?title=${title}`);
  }
}
