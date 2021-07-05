import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { PlagueService } from '../services/plague.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-plague-dash',
  templateUrl: './plague-dash.component.html',
  styleUrls: ['./plague-dash.component.css']
})
export class PlagueDashComponent{
  //Charts variable
  ctx:any;
  canvas:any;
  constructor(
    public plague: PlagueService
  ) {
    this.ngAfterViewInit();
   }
 
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.getPlague();
    Chart.defaults.global.defaultFontColor = 'white';
    setTimeout(()=>{
      this.lineChartDetail();
      this.barChartDetail();
      this.HoribarChart();
      this.polarChart();
    },100)
  }

  totalData:any;
  years:any;
  confirmCases:any;
  deathCases:any;
  conData:any;
  parseData:any;

  getPlague(){
     this.plague.GetPlague().toPromise().then((res)=>{
       this.totalData = res
       this.conData = JSON.stringify(Object(this.totalData))
       this.parseData = JSON.parse(this.conData) 

       this.years = this.parseData.map((years:{Years:any})=>{
        return years.Years
      })
      this.confirmCases = this.parseData.map((totalCases:{TotalCases:any})=>{
        return totalCases.TotalCases
      })
      this.deathCases = this.parseData.map((totaldeaths:{TotalDeaths:any})=>{
        return totaldeaths.TotalDeaths
      })
     })
  }

  polarChart(){
    this.canvas = document.getElementById('polarchart');
    this.ctx = this.canvas.getContext('2d');
  
   var myChart = new Chart(this.ctx, {
      type: 'polarArea',
      data: {
          labels: ['Total Confirmed','TotalDeath'  ],
          datasets: [{
              label: 'Covid-19',
              data: [13522, 1621],
              weight:1,
              order:2,
              backgroundColor: [
                'rgba(255, 255, 74, 1)',
                '#FF3333'  
              ],
              borderColor: [
                'rgba(255, 255, 74, 1)',
                '#E5D68A'  
              ],
              borderWidth: 2
          },],
          
      },
      options: {
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        responsive: true,
        legend: { position: 'left',},
        title: { display: true, text: 'Polar Chart' },
        animation: { animateScale: true, animateRotate: true },
        cutoutPercentage: 70
    }
  });
  }
  lineChartDetail(){
    this.canvas = document.getElementById('detailedLineChart');
    this.ctx = this.canvas.getContext('2d');
    
    var myChart = new Chart(this.ctx, {
        type: 'line',
        data: {
            labels:this.years,
            datasets: [{
                label: 'Confirm Cases',
                data: this.confirmCases,
                backgroundColor:'#DDD101',
                borderColor:'#DDD101',
                fill: false
            },
        
           {
               label: 'Death Cases',
                data: this.deathCases,
                backgroundColor:'#FF3333',
                borderColor:'#FF3333',
                fill:false
            }],
            
        },
        options:{
          legend:{position:"bottom"},
          responsive: true,
          
        }
        }
    );
  }
  barChartDetail(){
    this.canvas = document.getElementById('detailedBarChart');
    this.ctx = this.canvas.getContext('2d');
    
    var myChart = new Chart(this.ctx, {
        type: 'bar',
        data: {
            labels:this.years,
            datasets: [{
                label: 'Confirm Cases',
                data: this.confirmCases,
                backgroundColor:'#DDD101',
                fill: false
            },
          {
            label: 'Recovered Cases',
                data: this.deathCases,
                backgroundColor:'#FF3333',
                fill:false
          }],
            
        },
        options:{
          legend:{position:"bottom"},
          responsive: true,
          
        }
        }
    );
  }
  HoribarChart(){
    this.canvas = document.getElementById('HoriChart');
    this.ctx = this.canvas.getContext('2d');
    
    var myChart = new Chart(this.ctx, {
        type: 'horizontalBar',
        data: {
            labels:this.years,
            datasets: [{
                label: 'Confirm Cases',
                data: this.confirmCases,
                backgroundColor:'#DDD101',
                fill: false
            },
          {
            label: 'Recovered Cases',
                data: this.deathCases,
                backgroundColor:'#FF3333',
                fill:false
          }],
            
        },
        options:{
          legend:{position:"bottom"},
          responsive: true,
          
        }
        }
    );
  }
  

}
