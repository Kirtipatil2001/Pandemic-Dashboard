import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from '../Share/User';
import { collectExternalReferences } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email: string =''
  password: string=''
  message: any
  userDetail: any;
  error: any
  user:any;
  signUp:any;
  uUid:any;
  userId:any
  userName:any
  userDetails:any
  
  constructor(
      public loginService: LoginService,
      private router : Router,
      public fireAuth: AngularFireAuth,
      public fireStore : AngularFirestore,
      public toastr : ToastrService
  ) { 
     }
 
  ngOnInit(): void {
  }
 //Sign Up with Email and Password
  Register(){
    this.loginService.signUpUser(this.email, this.password)
    .then((user)=>{ 
    }).catch(error=>{
      this.toastr.info('Log')

     console.log(this.error)
     
    })
  this.router.navigate(['Form'])
  } 
  //signUp Form 
  GoogleLogin(){
    this.user = this.loginService.googleSignin().then(()=>
      this.router.navigate(['Form'])
    )
  }
 
  refresh(){
    this.Register();
  }
}
