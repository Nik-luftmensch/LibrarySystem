import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AdminBooksService } from 'src/app/Services/AdminServices/admin-books.service';
import { IBook } from './books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private fb: FormBuilder, private bookSer: AdminBooksService, private fbd: FormBuilder) { }
  public books = [];
  adminBooksUp;
  adminBooks;
  put() {
    this.bookSer.putBook(this.adminBooks.value).subscribe(
      error => console.error('Error!', error)
    );
  }
  onSubmit() {
    let cnf = confirm("Press Ok to save the form..");
    if (cnf == true) {
      this.put();

      this.adminBooks.reset();
    } else {

    }
  }

  filterStatus = "All";

  getbyStatus(fil: string) {
    this.bookSer.getBookbyStatus(fil)
      .subscribe(data => this.books = data);
  }
  get() {
    this.bookSer.getBook()
      .subscribe(data => this.books = data);
  }

  bookStatus(st) {
    this.filterStatus = st;
    if (this.filterStatus == "All") {
      this.get();
    }
    else {
      this.getbyStatus(this.filterStatus);
    }

  }

  wholeGet() {
  }


  ngOnInit() {

    this.bookStatus(this.filterStatus);

    this.adminBooks = this.fb.group({
      btitle: ['', [Validators.required, Validators.minLength(5)]],
      bcatag: ['', [Validators.required,]],
      bstatus: ['', [Validators.required,]],
      bcopies: ['', [Validators.required, Validators.min(1)]],
      bisbn: ['', [Validators.required,]],
      byear: ['', [Validators.required, Validators.min(1200), Validators.max(2020)]],
      bauthor: [''],
      bpub: [''],
      pubname: [''],
      bdate: ['']
    })


    this.adminBooksUp = this.fbd.group({
      btitle: ['', [Validators.required, Validators.minLength(5)]],
      bcatag: ['', [Validators.required,]],
      bstatus: ['', [Validators.required,]],
      bcopies: ['', [Validators.required, Validators.min(1)]],
      bisbn: ['', [Validators.required,]],
      byear: ['', [Validators.required, Validators.min(1200), Validators.max(2020)]],
      bauthor: [''],
      bpub: [''],
      pubname: [''],
      bdate: ['']
    })


  }

  delete(id: number) {
    let cnf = confirm("Press Ok to delete the book..");
    if (cnf == true) {
      this.bookSer.deleteBook(id).subscribe(
        (data: IBook) => {
        }
      );
    }
    else {

    }
  }
  OnUpdate(currentBook) {
    if (currentBook.id != null) {
      let cnf = confirm("Press Ok to update the book..");
      if (cnf == true) {
        this.update(currentBook);

      }
      else {

      }

    }
    else {
    }
  }

  update(book: IBook) {
    this.bookSer.updateBook(book).subscribe();
  }

  edit(book: IBook) {
    this.bookSer.currentBook = Object.assign({}, book)
  }

}
