import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/models/blog';




@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private REST_API_BLOGS = 'http://localhost:3000';

  private httpOPtions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private http: HttpClient) { }

  public getBlog(): Observable<Blog[]>{
    const url = `${this.REST_API_BLOGS}/blogs`;
    return this.http.get<Blog[]>(url, this.httpOPtions);
    
  }
}
