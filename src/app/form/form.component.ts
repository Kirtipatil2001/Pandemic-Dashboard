import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Review } from '../Share/review';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  status:string =""
  userId:any
  usersName:any;
  uUid:any
  users:any;

  constructor(
     private auth: AngularFireAuth,
     public fireStore: AngularFirestore,
     private router:Router,
     public loginService: LoginService
  ) { 
  }

  ngOnInit(): void {
  }
  
  // Uid Conversion
  userDetails = this.loginService.getUser().subscribe(user=>{
     this.uUid = JSON.stringify(user?.uid)
     this.userId = JSON.parse(this.uUid)
  })
  uName= this.loginService.getUser().subscribe(user=>{
    this.usersName = JSON.stringify(user?.displayName)
    this.users = JSON.parse(this.usersName)
  })

  
  // Review/Sentiment Form
  form = new FormGroup({
    userId: new FormControl(),
    userName: new FormControl(),
    date: new FormControl(),
    time: new FormControl(),
    diseaseType: new FormControl('',[Validators.required]),
    review: new FormControl('',[Validators.required]),
  })

 // Review Submit( storing in Firebase with uid )
  SubmitReview(){
      this.fireStore.collection('Review').add({
        userUid: this.userId,
        UserName: this.users,
        DiseaseType:this.form.value.diseaseType,
        Review: this.form.value.review,
       }
      )
      .then(res=>{
        this.status = "Success"
        console.log(res)
        this.form.reset()
      })
      .catch(error=>{
        console.log(error)
      })
    
    
   this.router.navigate(['/review-component']);
  } 
}
