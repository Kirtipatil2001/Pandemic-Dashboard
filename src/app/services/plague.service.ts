import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PlagueService {
  
  constructor(
    private http: HttpClient,
    
  ) { }
 

  GetPlague(){
    return this.http.get('assets/plague.json');
  }
  GetEbola(){
    return this.http.get('assets/Ebola.json');
  }
  GetEbolaGuinea(){
    return this.http.get('assets/GuineaEbola.json')
  }
  GetEbolaLiberia(){
    return this.http.get('assets/LiberiaEbola.json')
  }
  GetEbolaSierra(){
    return this.http.get('assets/sierraEbola.json')
  }
}
