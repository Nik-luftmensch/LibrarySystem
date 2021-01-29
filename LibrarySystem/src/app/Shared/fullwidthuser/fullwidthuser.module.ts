import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FullwidthuserComponent } from './fullwidthuser.component';
import { UserComponent } from 'src/app/General/user/user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageLayoutModule } from '../pageLayout/page-layout.module';



@NgModule({
  declarations: [
    FullwidthuserComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PageLayoutModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    FullwidthuserComponent,
    UserComponent
  ]
})
export class FullwidthuserModule { }
