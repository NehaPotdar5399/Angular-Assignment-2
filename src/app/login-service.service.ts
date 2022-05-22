import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  constructor(
    private httpClient : HttpClient,
    private router:Router
  ) { }
  /*Method to get login details*/
  isLoggedIn:boolean=false
  userType:string='non-admin'
  checkUser(email:any,password:any){
    this.httpClient.get<any>('http://localhost:3000/login').subscribe(
      (res)=>{
        const user=res.find((a: any)=>{
          return a.email=== email && a.password===password;
        });
        if(user){
          this.isLoggedIn=true;
          this.userType=user.type
          console.log(this.userType);
          alert("Login Successfull")
          this.router.navigate(['./feature'])
        }
        else{
          alert("No user Found")
        }
      }
    )
  }
  // getLoginDetails() {
  //   return this.httpClient.get<any>('http://localhost:3000/login');
  // }

}
