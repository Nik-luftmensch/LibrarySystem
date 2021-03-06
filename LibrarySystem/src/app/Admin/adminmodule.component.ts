import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AdminAuthService } from '../Services/AdminServices/admin-auth.service';
import { AdminMembersService } from '../Services/AdminServices/admin-members.service';

@Component({
  selector: 'app-adminmodule',
  templateUrl: './adminmodule.component.html',
  styleUrls: ['./adminmodule.component.css']
})
export class AdminmoduleComponent implements OnInit {

  adminid;
  adminProfile;
  reqUsers;
  badge;
  constructor(private adminDat: AdminAuthService, private memberSer: AdminMembersService) { }

  ngOnInit() {
    if (sessionStorage) {
      this.adminid = sessionStorage.getItem("adminid");
      if (this.adminid != null) {
      }
    }
    this.get(this.adminid);
    this.getReq();

  }


  get(id: number) {
    this.adminDat.getAdmin(id)
      .subscribe(data => this.adminProfile = data);

  }

  resetSession() {
    sessionStorage.removeItem("adminid");

  }

  getReq() {
    this.memberSer.getMemReq().subscribe(data => {
      this.reqUsers = data;
      if (this.reqUsers.length == null || this.reqUsers.length == 0) {
        this.badge = null;
      }
      else if (this.reqUsers.length != 0) {
        this.badge = this.reqUsers.length;
      }

    })
  }
}
