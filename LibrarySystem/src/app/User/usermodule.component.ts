import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/UserServices/user.service';


@Component({
  selector: 'app-usermodule',
  templateUrl: './usermodule.component.html',
  styleUrls: ['./usermodule.component.css']
})
export class UsermoduleComponent implements OnInit {

  userid;
  userProfile;
  constructor(private userDet: UserService, ) { }

  ngOnInit() {
    if (sessionStorage) {
      this.userid = sessionStorage.getItem("userid");
      if (this.userid != null) { }
    }
    this.get(this.userid);
  }

  get(id: number) {
    this.userDet.getUser(id)
      .subscribe(data => this.userProfile = data);
  }

  resetSession() {
    sessionStorage.removeItem("userid");
  }

}
