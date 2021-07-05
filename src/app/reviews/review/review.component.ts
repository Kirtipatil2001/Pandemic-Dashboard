import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore"
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { SentimentService } from 'src/app/services/sentiment.service';
import { Review } from 'src/app/Share/review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  
  constructor(
    public userService: LoginService,
     private Reservice: SentimentService,
     private router: Router 
  ) { }
  
  reviews: Review[] = [];
  ngOnInit(): void {
    this.Reservice.getReview().subscribe(review =>{
       
        this.reviews = review;
      
      })
  }
  addreview(){
    this.router.navigate(['Form'])
  }
 
}
