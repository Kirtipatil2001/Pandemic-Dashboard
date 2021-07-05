import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { DashComponent } from './dash/dash.component';
import { DiseaseTypeComponent } from './disease-type/disease-type.component';
import {InfoComponent} from './Covid/info.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EbolaDashComponent } from './ebola-dash/ebola-dash.component';
import { SpanishDashComponent } from './spanish-dash/spanish-dash.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReviewComponent } from './reviews/review/review.component';

import { ApiService } from './services/api.service';
import { PlagueService } from './services/plague.service';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { FormComponent } from './form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {environment} from "../environments/environment";



import { PlagueComponent } from './plague/plague.component';
import { PlagueDashComponent } from './plague-dash/plague-dash.component';
import { EbolaComponent } from './ebola/ebola.component';
import { ProfileComponent } from './profile/profile.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { enableProdMode } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    DiseaseTypeComponent,
    InfoComponent,
    EbolaDashComponent,
    SpanishDashComponent,
    ReviewComponent,
    AppDashboardComponent,
    FooterNavComponent,
    FormComponent,
    SignUpComponent,
    PlagueComponent,
    PlagueDashComponent,
    EbolaComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    AngularFireDatabaseModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    
  ],
  exports: [RouterModule],
  providers: [ApiService,
  PlagueService,
  {provide : LocationStrategy , useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
if (environment.production) {
  enableProdMode();
  }