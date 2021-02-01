import { Component, OnInit } from '@angular/core';
import { AdminMembersService } from 'src/app/Services/AdminServices/admin-members.service';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  myrr;
  constructor(private memberSer: AdminMembersService) {
    this.memberSer.getMembyId(1).subscribe(data => {
      this.myrr = data;
    });

  }


  ngOnInit() {
    
  }

}
