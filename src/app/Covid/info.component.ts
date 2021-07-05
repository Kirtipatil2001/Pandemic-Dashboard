import { Component, Input, OnInit, Output } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {ApiService} from '../services/api.service';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
 @Output()
  user:any;
  data:any;
  newNc:any;
  newNr:any;
  newNd:any;
  newNewR:any;
  countryD:any;  
  countryNum: any;
  date:any;
  countryData:any;

  buttonSpace:object = {
    "margin-right" : '20px',
  }
  buttonAlign:object = {
    "margin-top":'40px',
  }
  constructor( 
    private apiService: ApiService,
    private toastr: ToastrService 
    ) { 

  }
  error:any;
  errors:any;

  ngOnInit(): void {
    this.apiService.getData().toPromise().then((response)=>{
     this.user = JSON.stringify(Object(response));
     this.data = JSON.parse(this.user);
     let globalData = this.data;
     this.newNc = globalData.Global.TotalConfirmed;
     this.newNr = globalData.Global.TotalRecovered;
     this.newNd = globalData.Global.TotalDeaths;
     this.newNewR = globalData.Global.NewRecovered; 
     this.countryData = globalData.Countries;
    
     
    }).catch(err=>{
      this.error = JSON.stringify(Object(err))
      this.errors= JSON.parse(this.error)
      this.toastr.error('Api is Down')
    }); 
  }
 

  
}
