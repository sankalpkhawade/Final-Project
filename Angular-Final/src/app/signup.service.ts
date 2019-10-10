import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';
import {User} from './user';
import{Trainer} from './trainer';
import {Actor} from './actor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private baseUrl = 'http://localhost:8200/api/auth';

  constructor(private http:HttpClient) { }

  createUser(user: User): Observable<Object> {  
    return this.http.post(`${this.baseUrl}`+'/user/signup', user);  
  }

  createTrainer(trainer: Trainer): Observable<Object> {  
    return this.http.post(`${this.baseUrl}`+'/mentor/signup', trainer);  
  }

}
