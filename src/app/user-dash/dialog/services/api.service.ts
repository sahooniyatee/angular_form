import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  postUser(data:any){
    return this.http.post<any>("http://localhost:3000/userlist/",data)
  }
  getUser(){
    return this.http.get<any>("http://localhost:3000/userlist/")
  }

  constructor(private http : HttpClient) { }

}
