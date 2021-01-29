import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './Shared/default/default.module';
import { FullwidthadminModule } from './Shared/fullwidthadmin/fullwidthadmin.module';
import { FullwidthuserModule } from './Shared/fullwidthuser/fullwidthuser.module';
import { AdminmoduleModule } from './Admin/adminmodule.module';
import { UsermoduleModule } from './User/usermodule.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FullwidthuserModule,
    FullwidthadminModule,
    AdminmoduleModule,
    UsermoduleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
