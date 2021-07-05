import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SentimentService } from '../services/sentiment.service';
import { Review } from '../Share/review';


@Component({
  selector: 'app-disease-type',
  templateUrl: './disease-type.component.html',
  styleUrls: ['./disease-type.component.css']
})
export class DiseaseTypeComponent implements OnInit {

  buttonSpace:object = {
    "margin-right" : '10px',
  }
  buttonAlign:object = {
    "margin-top":'10px', 
  }
  
  review(){
   this.router.navigate(['/review-component']);
  }

  constructor(
    
    private Reservice: SentimentService,
    private router: Router 
  ) { }
  
  reviews: Review[]=[];
  ngOnInit(): void {
    this.Reservice.getReview().subscribe(review =>{
     
      this.reviews = review;
    });
  }
}
