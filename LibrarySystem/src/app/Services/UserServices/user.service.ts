import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMember } from '../../Admin/members/members';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public urlUser: string = "http://localhost:5001/members";
  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<IMember> {
    return this.http.get<IMember>(this.urlUser + '/' + id);
  }

}
