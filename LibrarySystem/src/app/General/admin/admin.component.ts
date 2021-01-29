import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AdminAuthService } from 'src/app/Services/AdminServices/admin-auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private adminSer: AdminAuthService) { }
  admin;
  public admins = [];
  temp;

  get() {
    this.adminSer.getAdmins()
      .subscribe(data => this.admins = data);
  }

  ngOnInit() {
    this.get();
  }
  adminSubmit(form: NgForm) {
    this.admin = form.value;

    this.temp = false;

    this.admins.forEach(admin => {
      if (admin.amail == this.admin.adminname) {
        if (admin.apassword == this.admin.password) {


          alert("You have been successfully logged in...");
          sessionStorage.setItem("adminid", admin.id);
          this.router.navigate(['admin/books']);
          this.temp = true;
          form.reset();

        }
        else {
          alert("Invalid password...");
          this.temp = true;

        }
      } else {
        form.reset();
      }

    });
    if (this.temp == false) {
      alert("Invalid admin id or password...");

    }
  }
}