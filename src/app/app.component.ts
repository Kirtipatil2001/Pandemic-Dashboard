import { Component, Input, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  data:any;
  app_info:boolean=false;
  @Input()
  newNc:any;
  newNr:any;
  newNd:any;
 
  nav:any = 'myNav';
  refresh(){
    window.location.reload();
  }
 
   
  constructor(
    updates: SwUpdate
  ){
 updates.available.subscribe(event =>{
   updates.activateUpdate().then(()=>[
     document.location.reload()
   ])
 })
  }
  ngOnInit(){
   /* this.apiService.getData().subscribe(
      (user:any) => {
        console.log(user);
        this.user = JSON.stringify(Object(user.Countries));
        this.data = JSON.parse(this.user);
        let globalData = this.data;
        this.Apidata = globalData.Global.NewConfirmed;
        console.log(this.Apidata);
      },    
    )*/
   /*this.apiService.getData().toPromise().then((response)=>{
     this.user = JSON.stringify(Object(response));
     this.data = JSON.parse(this.user);
     let globalData = this.data;
    this.newNc = globalData.Global.TotalConfirmed;
    this.newNr = globalData.Global.NewRecovered;
    this.newNd = globalData.Global.NewDeaths;
    this.country = globalData.Countries;
    console.log(this.newNc);
    console.log(this.newNr);
    console.log(this.newNd);
   })*/
  }
  }
  


