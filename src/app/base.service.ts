import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private api="http://localhost:3000/courses"

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get(this.api)
  }
}
