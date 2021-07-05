import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import  auth  from  'firebase/app';
import  Firebase  from  'firebase/app';
import { Observable } from 'rxjs';
import { User } from '../Share/User';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

declare var firebase:any;
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userName:any;
  logged:boolean =false;
  public user$: Observable<any>;
  constructor( 
    public fireAuth: AngularFireAuth,
    private firestore: AngularFirestore
    )
  { 
  }  
 // Google Login
  async googleSignin() {
    const provider = new Firebase.auth.GoogleAuthProvider();
    const credential = await this.fireAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }
  public updateUserData(user:any) {
  // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(`users/${user.uid}`);
    const data = { 
    uid: user.uid, 
    email: user.email, 
    displayName: user.displayName, 
    photoURL: user.photoURL
    } 
    return userRef.set(data, { merge: true })
  }
   signInUser(email:string, password:string){
    return this.fireAuth.signInWithEmailAndPassword(email, password)
    .then(res=>
      {
       this.logged = true
      })
      .catch( error=>console.log(error))
   }
   
   signUpUser(email:string, password:string){
   return this.fireAuth.createUserWithEmailAndPassword(email, password)
    .then((res)=>
      {
       this.logged = true
      })
      .catch( error=>console.log(error)
      )
   }
   //users Details
   getUser(){
     return this.fireAuth.authState;
   }

   logOutUser(){
     return this.fireAuth.signOut();
   }
 getEmailUser(){
   this.userName = this.firestore.collection('user').snapshotChanges();
   return this.userName
 }

}
