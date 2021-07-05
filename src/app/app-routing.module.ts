import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DashComponent} from './dash/dash.component';
import {DiseaseTypeComponent} from './disease-type/disease-type.component';
import{InfoComponent} from './Covid/info.component';
import {SpanishDashComponent} from './spanish-dash/spanish-dash.component';
import { from } from 'rxjs';
import { AppComponent } from './app.component';
import { ReviewComponent } from './reviews/review/review.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';

import { FormComponent } from './form/form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AngularFireAuthGuard,  redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard';
import { EbolaDashComponent } from './ebola-dash/ebola-dash.component';
import { EbolaComponent } from './ebola/ebola.component';
import { PlagueComponent } from './plague/plague.component';
import { PlagueDashComponent } from './plague-dash/plague-dash.component';
import { ProfileComponent } from './profile/profile.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['SignUp']);
const redirectLoggedInToReview = () => redirectLoggedInTo(['profile']);
const routes: Routes = [
  { path: '', component: DashComponent },
  {path:'SignUp', component:SignUpComponent, canActivate: [AngularFireAuthGuard],  data: { authGuardPipe: redirectLoggedInToReview } },
  {path:'Form', component:FormComponent, canActivate: [AngularFireAuthGuard],  data: { authGuardPipe: redirectUnauthorizedToLogin }},
  {path:'info-component', component:InfoComponent},
  {path:'disease-component', component:DiseaseTypeComponent},
  {path:'review-component', component:ReviewComponent},
  {path:'spanish-component',component:SpanishDashComponent},
  {path:'dashboard', component:AppDashboardComponent },
  {path:'ebolaComponent', component:EbolaDashComponent},
  {path:'ebola-component', component: EbolaComponent},
  {path:'plague-component', component:PlagueComponent},
  {path:'plague-dash', component:PlagueDashComponent},   
  {path:'profile', component:ProfileComponent,canActivate: [AngularFireAuthGuard],  data: { authGuardPipe: redirectUnauthorizedToLogin }}   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
