import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutModule } from 'src/app/Shared/pageLayout/page-layout.module';
import { FullwidthadminComponent } from './fullwidthadmin.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from 'src/app/General/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DefaultModule } from '../default/default.module';



@NgModule({
  declarations: [
    FullwidthadminComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PageLayoutModule,
    FormsModule,
    HttpClientModule,
    


  ],
  exports: [
    FullwidthadminComponent,
    AdminComponent,
    
  ]
})
export class FullwidthadminModule { }
