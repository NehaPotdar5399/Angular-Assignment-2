import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AuthguardComponent } from '../authguard/authguard.component';


const routes: Routes = [
  {
    path:'',
    component:LoginpageComponent
    },
    {
      path:'unauth',
      component:AuthguardComponent
      },
      {
        path:'notFound',
        component:PageNotFoundComponent
        },
];
@NgModule({
  declarations: [
    LoginpageComponent,
    PageNotFoundComponent
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }








