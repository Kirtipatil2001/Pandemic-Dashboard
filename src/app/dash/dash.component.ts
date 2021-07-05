
import { Component, Input, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import { Chart }  from 'chart.js';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent  {
  /* Api Data var */
  
  newConfirm:any;
  newDeath:any;
  user:any;
  data:any;
   

  /* Charts */
  ctx:any;
  canvas:any;

  constructor(private apiService:ApiService,
    public router:Router
    ) { 
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
 
    Chart.defaults.global.defaultFontColor = 'white';
    setTimeout(()=>{
      this.getCovid();
    },50);
  }
  refresh(){
    window.location.reload();
    this.ngAfterViewInit()
  }
  
  getCovid(){
    this.apiService.getData().subscribe(
      datas =>{
        this.user = JSON.stringify(Object(datas));
        this.data = JSON.parse(this.user);
        let globalData = this.data;
        this.newConfirm = globalData.Global.TotalConfirmed;
       
        this.newDeath = globalData.Global.TotalDeaths;
        this.mychart(this.newConfirm)
        this.linechart(this.newConfirm)
      }
    )
  }
 
  navigate(){
    this.router.navigate(['disease-component'])
  }
  mychart(newConfirm:any){
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    var myChart = new Chart(this.ctx, {
        type: 'pie',
        data: {
            labels: ['Spanish-Flu','Covid-19','Ebola','Plague'],
            datasets: [{
                label: 'pandemic',
                data: [ 500000000, this.newConfirm ,28616,13522],
                weight:1,
                order:2,
                backgroundColor: [
                  'rgba(255, 255, 74, 1)',
                  '#383CC1',
                  '#99FF33',
                  '#FF3333'  
                ],
                borderColor: [
                  'rgba(255, 255, 74, 1)',
                  '#383CC1',
                  '#99FF33',
                  '#FF3333'  
                ],
                borderWidth: 2
            },],
            
        },
        options: {
          rotation: 1 * Math.PI,
          circumference: 1 * Math.PI,
          responsive: true,
          legend: { position: 'bottom',},
          title: { display: true, text: 'Cases of Pandemic Diseases Pie-Chart' },
          animation: { animateScale: true, animateRotate: true },
          cutoutPercentage: 70
      }
    });
} 
linechart(newConfirm:any){
  this.canvas = document.getElementById('canvas');
  this.ctx = this.canvas.getContext('2d');
  var myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
          labels:['Pandemics'] ,
          datasets: [{
              label: 'Spanish-Flu',
              data:  [500000000],
             
              backgroundColor: [
                '#383CC1'
              ],
              borderColor: [
               
                '#383CC1',
                
              ],
              borderWidth: 2
          },
          {
            label: 'Covid-19',
            data:  [this.newConfirm] ,
            backgroundColor:[
              '#99FF33',
            ],
            borderColor: [
              '#99FF33',
            ],
            borderWidth: 2
        },
        {
          label: 'Ebola',
          data: [28616] ,
       
          backgroundColor: [
            '#FF3333'
          ],
          borderColor: [
            '#FF3333'  
          ],
          borderWidth: 2
      }, {
        label: 'Plague',
        data:[13522],
       
        backgroundColor: [
          'rgba(255, 255, 74, 1)',
        ],
        borderColor: [
          'rgba(255, 255, 74, 1)',
        ],
        borderWidth: 2
    },
      ],
          
      },
      options: {
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        responsive: true,
      
        legend: {
          labels:{
            fontColor:'White'
          }, position: 'bottom',},
        title: { display: true, text: 'Cases Of Pandemic Diseases Bar-Chart' },
        animation: { animateScale: true, animateRotate: true },
        cutoutPercentage: 70
    }
  });
}
}
