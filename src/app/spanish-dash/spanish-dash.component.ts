import { Component, OnInit } from '@angular/core';

import { Chart } from 'chart.js';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-spanish-dash',
  templateUrl: './spanish-dash.component.html',
  styleUrls: ['./spanish-dash.component.css']
})
export class SpanishDashComponent implements OnInit {
  buttonSpace:object = {
    "margin-right" : '5px',
    "margin-left": '5px'
  }
  buttonAlign:object = {
    "margin-top":'40px',
  }
  confirmCases: number = 500000000;
  deathCase:number = 50000000;
 //Charts variable
  ctx:any;
  canvas:any;
  constructor() { }
  ngAfterViewInit() {
    Chart.defaults.global.defaultFontColor = 'white';
    setTimeout(()=>{
      this.mychart();
      this.barChartDetail();
      this.polarChartDetail();
      this.bubbleChart();
    },100);
  }
  ngOnInit(): void {
    
  }
  mychart(){
    this.canvas = document.getElementById('Doughchart');
    this.ctx = this.canvas.getContext('2d');
    
    var myChart = new Chart(this.ctx, {
        type: 'doughnut',
        data: {
            labels: ['Total Confirmed','Death'],
            datasets: [{
                label: 'Covid-19',
                data: [this.confirmCases, this.deathCase],
                weight:1,
                order:2,
                backgroundColor: [
                  'rgba(255, 255, 74, 1)',
                  '#FF3333' 
                ],
                borderColor: [
                  'rgba(255, 255, 74, 1)',
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
          title: { display: true, text: 'Pie Chart' },
          animation: { animateScale: true, animateRotate: true },
          cutoutPercentage: 70
      }
    });
  }

  
  barChartDetail(){
    this.canvas = document.getElementById('barchart');
    this.ctx = this.canvas.getContext('2d');
  
   var myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
          labels: ['Total Confirmed','Death'  ],
          datasets: [{
             label:"Data",
              data: [this.confirmCases, this.deathCase,0],
              weight:1,
              order:2,
              backgroundColor: [
                'rgba(255, 255, 74, 1)',
                '#FF3333'
              ],
              borderColor: [
                'rgba(255, 255, 74, 1)',
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
        title: { display: true, text: 'Bar Chart', },
        animation: { animateScale: true, animateRotate: true },
        cutoutPercentage: 70
    }
  });
  }
  polarChartDetail(){
    this.canvas = document.getElementById('polarchart');
    this.ctx = this.canvas.getContext('2d');
  
   var myChart = new Chart(this.ctx, {
      type: 'polarArea',
      data: {
          labels: ['Total Confirmed','Death'],
          datasets: [{
              label: 'Covid-19',
              data: [this.confirmCases, this.deathCase],
              weight:1,
              order:2,
              backgroundColor: [
                'rgba(255, 255, 74, 1)',
                '#FF3333'
              ],
              borderColor: [
                'rgba(255, 255, 74, 1)',
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
        title: { display: true, text: 'Radar Chart', },
        animation: { animateScale: true, animateRotate: true },
        cutoutPercentage: 70
    }
  });
  }
  bubbleChart(){
    this.canvas = document.getElementById('bubblechart');
    this.ctx = this.canvas.getContext('2d');
  
   var myChart = new Chart(this.ctx, {
      type: 'bubble',
      data: {
          labels: ['Total Confirmed','Death'],
          datasets: [{ 
            label:"ConfirmCases",
            data:[
              {x:1920, y:this.confirmCases, r:22.2},
              {x:1920, y:this.deathCase, r:10.23}
            ],
            backgroundColor:['rgba(255, 255, 74, 1)',
            '#FF3333' 
          ]
          },
          
          ], 
      },
      options: {
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        responsive: true,
        legend: { position: 'bottom',},
        title: { display: true, text: 'Bubble Chart', },
        animation: { animateScale: true, animateRotate: true },
        cutoutPercentage: 70
    }
  });
  }
}
