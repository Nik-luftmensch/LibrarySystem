import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/General/home/home.component';
import { AboutComponent } from 'src/app/General/about/about.component';
import { DefaultComponent } from './default.component';
import { RouterModule, Routes } from '@angular/router';
import { PageLayoutModule } from 'src/app/Shared/pageLayout/page-layout.module';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    AboutComponent,
  ],

  imports: [

    CommonModule,
    RouterModule,
    PageLayoutModule,
  ],

})
export class DefaultModule { }
