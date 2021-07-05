import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Review } from '../Share/review';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SentimentService {
  reviewCollection: AngularFirestoreCollection<Review>
  review: Observable<any[]>;
  constructor(
    private ngFires : AngularFirestore
  ) {
     this.review = this.ngFires.collection('Review').valueChanges();
   }

   getReview(){
     return this.review;
   }
}
