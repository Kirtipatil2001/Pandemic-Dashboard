import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 user:any;
 email:any;
 name:any;
 image:any;
 displayName:any

  constructor(
    public auth: LoginService,
    public router:Router
  ) {
    this.getuser();
    this.getEmail();
   }

  ngOnInit(): void {
  
  }
  getEmail():void{
    this.auth.getEmailUser().subscribe((response:any)=>{
      this.displayName = JSON.stringify(response)
    }
    )
  }
 getuser(){
   this.auth.getUser().subscribe(
     res =>{
       this.email = res?.email,
       this.name = res?.displayName,
       this.image = res?.photoURL
     }
   )
 }
logOut(){
  this.auth.logOutUser()
  this.router.navigate(['']);

}

}
