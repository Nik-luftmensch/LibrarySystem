import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './Shared/default/default.component';
import { HomeComponent } from './General/home/home.component';
import { AboutComponent } from './General/about/about.component';
import { FullwidthadminComponent } from './Shared/fullwidthadmin/fullwidthadmin.component';
import { AdminComponent } from './General/admin/admin.component';
import { FullwidthuserComponent } from './Shared/fullwidthuser/fullwidthuser.component';
import { UserComponent } from './General/user/user.component';
import { AdminmoduleComponent } from './Admin/adminmodule.component';
import { MembersComponent } from './Admin/members/members.component';
import { UsermoduleComponent } from './User/usermodule.component';
import { OwnedComponent } from './User/owned/owned.component';
import { BorrowComponent } from './User/borrow/borrow.component';
import { DemoComponent } from './User/demo/demo.component';
import { TransactionComponent } from './Admin/transaction/transaction.component';
import { BooksComponent } from './Admin/books/books.component';
import { ProfileComponent } from './User/profile/profile.component';





const routes: Routes = [
  {
    path: '', component: DefaultComponent, children: [{ path: '', component: HomeComponent }, { path: 'about', component: AboutComponent, }]
  },
  {
    path: ' ', component: FullwidthadminComponent, children: [{
      path: 'admin', component: AdminComponent,
    }]
  },

  {
    path: 'about', component: FullwidthuserComponent, children: [{ path: 'user', component: UserComponent }]
  },


  {
    path: '', component: FullwidthadminComponent, children: [{ path: 'admin', component: AdminComponent, }]
  },
  {
    path: '', component: FullwidthuserComponent, children: [{ path: 'user', component: UserComponent }]
  },

  {
    path: 'admin', component: AdminmoduleComponent, children: [
      { path: 'books', component: BooksComponent },
      { path: 'members', component: MembersComponent },
      { path: 'transaction', component: TransactionComponent }
    ]
  },

  {
    path: 'about', component: FullwidthadminComponent, children: [{
      path: 'admin', component: AdminComponent, children: [{

        path: 'admin', component: AdminmoduleComponent, children: [
          { path: 'books', component: BooksComponent },
          { path: 'members', component: MembersComponent },
          { path: 'transaction', component: TransactionComponent }
        ]

      }]


    }]
  },


  {
    path: 'user', component: UsermoduleComponent,
    children: [
      { path: 'borrow', component: BorrowComponent },
      { path: 'owned', component: OwnedComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'demo', component: DemoComponent },



    ]
  },

  {
    path: 'about', component: FullwidthuserComponent, children: [{
      path: 'user', component: UserComponent, children: [{

        path: 'user', component: AdminmoduleComponent, children: [
          { path: 'borrow', component: BorrowComponent },
          { path: 'owned', component: OwnedComponent },
          { path: 'profile', component: ProfileComponent },
          { path: 'demo', component: DemoComponent },

        ]
      }]


    }]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
