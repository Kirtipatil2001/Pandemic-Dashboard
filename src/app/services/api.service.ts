import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  url:string = "https://api.covid19api.com/summary";
   countryUrl:string ="https://api.covid19api.com/dayone/country/";
   user:any;
   country:any ;
   apiData:any;
  constructor(private http:HttpClient) { }
  getData(){
  localStorage.setItem('data',this.url)
  this.apiData = localStorage.getItem('data')
    return this.http.get(this.apiData);
  }
 getCountryData(){
   return this.http.get<any>(this.countryUrl + this.country);
 }
 getValueCountry(selectCountry:string){
   this.country = selectCountry;
 }

}
