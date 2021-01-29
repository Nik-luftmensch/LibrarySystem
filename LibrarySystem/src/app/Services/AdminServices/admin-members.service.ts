import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMember } from '../../Admin/members/members';

@Injectable({
  providedIn: 'root'
})
export class AdminMembersService {

  private urlMember: string = "http://localhost:5001/members";

  constructor(private http: HttpClient) { }

  getMember(): Observable<IMember[]> {
    return this.http.get<IMember[]>(this.urlMember);
  }
  putMember(member: IMember) {
    return this.http.post<IMember>(this.urlMember, member)
  }

  deleteMember(id: number): Observable<IMember> {
    return this.http.delete<IMember>(this.urlMember + '/' + id);
  }
  updateMember(member: IMember): Observable<IMember> {
    return this.http.put<IMember>(this.urlMember + '/' + member.id, member);
  }

  getMembyId(id: number): Observable<IMember> {
    return this.http.get<IMember>(this.urlMember + '/' + id);
  }

  getMemReq() {
    return this.http.get<IMember[]>(this.urlMember + '?ustatus=1');
  }

  getMemRec() {
    return this.http.get<IMember[]>(this.urlMember + '?urecstatus=1');
  }

  currentMember: IMember = {
    id: null,
    uname: '',
    uadmid: null,
    umail: '',
    udep: '',
    upassword: '',
    ustatus: null,
    urecstatus: null,
    ureqj: '',
    urecj: ''

  }

}
