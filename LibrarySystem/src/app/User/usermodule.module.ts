import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsermoduleComponent } from './usermodule.component';
import { RouterModule } from '@angular/router';
import { PageLayoutModule } from '../Shared/pageLayout/page-layout.module';
import { FullwidthuserModule } from '../Shared/fullwidthuser/fullwidthuser.module';
import { HttpClientModule } from '@angular/common/http';
import { OwnedComponent } from './owned/owned.component';
import { BorrowComponent } from './borrow/borrow.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BorrowSearchPipe } from '../CustomSearchPipes/borrow-search.pipe';
import { DemoComponent } from './demo/demo.component';



@NgModule({
  declarations: [
    UsermoduleComponent,
    OwnedComponent,
    BorrowComponent,
    ProfileComponent,
    BorrowSearchPipe,
    DemoComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    PageLayoutModule,
    FullwidthuserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  exports: [
    UsermoduleComponent,
    OwnedComponent,
    BorrowComponent,
    ProfileComponent,
  ]
})
export class UsermoduleModule { }
