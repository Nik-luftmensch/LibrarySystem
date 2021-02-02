import { Component, OnInit } from '@angular/core';
import { AdminBooksService } from 'src/app/Services/AdminServices/admin-books.service';
import { UserService } from 'src/app/Services/UserServices/user.service';
import { AdminMembersService } from 'src/app/Services/AdminServices/admin-members.service';
import { IBook } from 'src/app/Admin/books/books';


@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css']
})
export class BorrowComponent implements OnInit {

  constructor(private bookSer: AdminBooksService, private userDet: UserService, private memberSer: AdminMembersService, ) {

  }
  ngAfterViewInit() {
  }

  user;
  dodge;
  badge;
  public requestedBooks = [];
  public recievedBooks = [];
  userid;
  public books = [];

  rec() {
    this.recievedBooks = JSON.parse(this.user.urecj);
    if (this.recievedBooks.length == null || this.recievedBooks.length == 0) {
      this.dodge = null;
    }
    else if (this.recievedBooks.length != 0) {
      this.dodge = this.recievedBooks.length;
    }
  }
  ngOnInit() {

    this.getbyStatus("Old&bstatus=New&bstatus=Damaged");
    if (sessionStorage) {
      this.userid = sessionStorage.getItem("userid");
      if (this.userid != null) { }
    }
    this.memberSer.getMembyId(this.userid).subscribe(
      data => {
        this.user = data
        this.rec();
        this.requestedBooks = JSON.parse(this.user.ureqj);
        if (this.requestedBooks.length == null || this.requestedBooks.length == 0) {
          this.badge = null;
        }
        else if (this.requestedBooks.length != 0) {
          this.badge = this.requestedBooks.length;
        }
      }
    );

  }

  getbyStatus(fil: string) {
    this.bookSer.getBookbyStatus(fil)
      .subscribe(data => this.books = data);
  }



  addtoReq(book: IBook) {
    if (book.bcopies > 0) {
      if (this.requestedBooks == null) {
        this.requestedBooks = this.requestedBooks || [];
        this.requestedBooks.push(book);
        this.reqSave();
        book.bcopies -= 1;
        this.bookSer.updateBook(book).subscribe();
      }
      else {
        if(this.requestedBooks.length> 0 && this.requestedBooks[0].btitle == book.btitle){
          alert("You can not take two copies of the same book...")
        }
        else{
        if ((this.requestedBooks.length + this.recievedBooks.length) < 2 || (this.requestedBooks.length + this.recievedBooks.length) == null)  {
          this.requestedBooks.push(book);
          this.reqSave();
          book.bcopies -= 1;
          this.bookSer.updateBook(book).subscribe();
        } else {
          alert("You can not take more than 2 books...")
        }
      }
    }
    }
    else {
      if (book.bcopies == 0) {
        alert("Book is not available now..")
      }
      else {
        alert("You cant take more than 2 books")
      }
    }
  }

  delfrmReq(borrow) {
    let index = this.requestedBooks.findIndex(obj => obj.btitle == borrow.btitle);
    this.requestedBooks.splice(index, 1);
    this.reqSave();

    let tempcp;
    this.books.forEach(element => {
      if (borrow.id == element.id) {
        tempcp = element.bcopies;
      }
    });

    tempcp += 1;
    borrow.bcopies = tempcp;
    this.bookSer.updateBook(borrow).subscribe();
  }
  delsave() {
    this.user.ustatus = 1;
    this.user.ureqj = JSON.stringify(this.requestedBooks);
    this.memberSer.updateMember(this.user).subscribe();
  }

  reqSave() {
    if (this.requestedBooks.length == 0) {
      this.user.ustatus = 0;
    } else {
      this.user.ustatus = 1;
    }
    this.user.ureqj = JSON.stringify(this.requestedBooks);
    this.memberSer.updateMember(this.user).subscribe();
  }
  recSave() {
    if (this.recievedBooks.length == 0) {
      this.user.urecstatus = 0;
    } else {
      this.user.urecstatus = 1;
    }
    this.user.urecj = JSON.stringify(this.recievedBooks);
    this.memberSer.updateMember(this.user).subscribe();
  }
  delfrmRec(borrow) {
    let index = this.recievedBooks.findIndex(obj => obj.btitle == borrow.btitle);
    this.recievedBooks.splice(index, 1);
    this.recSave();

    let tempcp;
    this.books.forEach(element => {
      if (borrow.id == element.id) {
        tempcp = element.bcopies;
      }
    });

    tempcp += 1;
    borrow.bcopies = tempcp;
    this.bookSer.updateBook(borrow).subscribe();
  }

}
