import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Chart }  from 'chart.js';
import { PlagueService } from '../services/plague.service';
import { convertToObject } from 'typescript';

@Component({
  selector: 'app-ebola-dash',
  templateUrl: './ebola-dash.component.html',
  styleUrls: ['./ebola-dash.component.css']
})
export class EbolaDashComponent implements OnInit {
  
 items:any
 ebolaItems:any;
 //Convert Data
 convertData:any
  parseData:any
 //Country-wise data
  guineaConfirm:any;
  guineaDeath:any;
  guineaDate:any;
  liberiaConfirm:any;
  liberiaDeath:any;
  liberiaDate:any;
  sierraConfirm:any;
  sierraDeath:any;
  sierraDate:any;
 /* Charts */
 ctx:any;
 canvas:any;
  constructor(
    public PlagueService: PlagueService
  ) { 
    this.ngOnInit()
  }

  ngOnInit(): void {
    this.DataPlagues();
    Chart.defaults.global.defaultFontColor = 'white';
    setTimeout(()=>{
      this.lineChartGuinea();
      this.barChartGuinea();
      this.HoribarChartGuinea();
      this.lineStepGuinea();
      // Liberia Chart initialise
      this.lineChartliberia();
      this.HoribarChartliberia();
      this.barChartLiberia();
      this.lineStepliberia();
      // Sierra Chart intialise
      this.lineStepSierra();
      this.lineChartSierra();
      this.barChartSierra();
      this.HoribarChartSierra();
      //Country
      this.lineChart();
      this.lineChartDeaths();
      this.barChart();
      this.horiChartDeaths();
    },100);
  }
  DataPlagues(){
   
      //Guinea JSON DATA sort
      this.PlagueService.GetEbolaGuinea().subscribe(
        data =>{
          //Data conversion
           this.convertData = JSON.stringify(Object(data))
           this.parseData = JSON.parse(this.convertData)
          //maping (confirmcases, deathCases, Dates)
           this.guineaConfirm = this.parseData.map((confirm:{TotalCases:any})=>{
             return confirm.TotalCases
           })
          
           this.guineaDeath = this.parseData.map((death:{TotalDeaths:any})=>{
            return death.TotalDeaths
          })
      
          this.guineaDate = this.parseData.map((date:{Date:any})=>{
            return date.Date
          })
         
        }   
      )
      //Liberia JSON DATA sort
      this.PlagueService.GetEbolaLiberia().subscribe(
        data =>{
          //Data conversion
           this.convertData = JSON.stringify(Object(data))
           this.parseData = JSON.parse(this.convertData)
          //maping (confirmcases, deathCases, Dates)
           this.liberiaConfirm = this.parseData.map((confirm:{TotalCases:any})=>{
             return confirm.TotalCases
           })
           
           this.liberiaDeath = this.parseData.map((death:{TotalDeaths:any})=>{
            return death.TotalDeaths
          })
         
          this.liberiaDate = this.parseData.map((date:{Date:any})=>{
            return date.Date
          })
       
        }
      )
      //Sierra JSON DATA sort
       this.PlagueService.GetEbolaSierra().subscribe(
        data =>{
          //Data conversion
           this.convertData = JSON.stringify(Object(data))
           this.parseData = JSON.parse(this.convertData)
          //maping (confirmcases, deathCases, Dates)
           this.sierraConfirm = this.parseData.map((confirm:{TotalCases:any})=>{
             return confirm.TotalCases
           })
           
           this.sierraDeath = this.parseData.map((death:{TotalDeaths:any})=>{
            return death.TotalDeaths
          })
         
          this.sierraDate = this.parseData.map((date:{Date:any})=>{
            return date.Date
          })
        }
      )
  }
  lineChartGuinea(){
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    
    var myChart = new Chart(this.ctx, {
        type: 'line',
        data: {
            labels:this.guineaDate,
            datasets: [{
                label: 'Confirm Cases',
                data: this.guineaConfirm,
                backgroundColor:'#DDD101',
                borderColor:'#DDD101',
                fill: false
            },
           {
               label: 'Death Cases',
                data: this.guineaDeath,
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
  lineStepGuinea(){
    this.canvas = document.getElementById('canvasStepped');
    this.ctx = this.canvas.getContext('2d');
    var myChart = new Chart(this.ctx, {
        type: 'line',
        data: {
            labels:this.guineaDate,
            datasets: [{
                label: 'Confirm Cases',
                data: this.guineaConfirm,
                backgroundColor:'#DDD101',
                borderColor:'#DDD101',
                fill: false,
                steppedLine:true
            },
           {
               label: 'Death Cases',
                data: this.guineaDeath,
                backgroundColor:'#FF3333',
                borderColor:'#FF3333',
                fill:false,
                steppedLine:true
            }],
        },
        options:{
          legend:{position:"bottom"},
          responsive: true,
        }
        }
    );
  }
  barChartGuinea(){
    this.canvas = document.getElementById('BarChartGuinea');
    this.ctx = this.canvas.getContext('2d');
    
    var myChart = new Chart(this.ctx, {
        type: 'bar',
        data: {
            labels:this.guineaDate,
            datasets: [{
                label: 'Confirm Cases',
                data: this.guineaConfirm,
                backgroundColor:'#DDD101',
                fill: false
            },
          {
            label: 'Recovered Cases',
                data: this.guineaDeath,
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
  HoribarChartGuinea(){
    this.canvas = document.getElementById('HoriChartGuinea');
    this.ctx = this.canvas.getContext('2d');
    
    var myChart = new Chart(this.ctx, {
        type: 'horizontalBar',
        data: {
            labels:this.guineaDate,
            datasets: [{
                label: 'Confirm Cases',
                data: this.guineaConfirm,
                backgroundColor:'#DDD101',
                fill: false
            },
          {
            label: 'Recovered Cases',
                data: this.guineaDeath,
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
  /////////////////////// liberia //////////////////////////////////////////////
  lineChartliberia(){
    this.canvas = document.getElementById('liberiaCanvas');
    this.ctx = this.canvas.getContext('2d');
    
    var myChart = new Chart(this.ctx, {
        type: 'line',
        data: {
            labels:this.liberiaDate,
            datasets: [{
                label: 'Confirm Cases',
                data: this.liberiaConfirm,
                backgroundColor:'#DDD101',
                borderColor:'#DDD101',
                fill: false
            },
        
           {
               label: 'Death Cases',
                data: this.liberiaDeath,
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
  HoribarChartliberia(){
    this.canvas = document.getElementById('HoriChartLiberia');
    this.ctx = this.canvas.getContext('2d');
    
    var myChart = new Chart(this.ctx, {
        type: 'horizontalBar',
        data: {
            labels:this.liberiaDate,
            datasets: [{
                label: 'Confirm Cases',
                data: this.liberiaConfirm,
                backgroundColor:'#DDD101',
                fill: false
            },
          {
            label: 'Recovered Cases',
                data: this.liberiaDeath,
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
  barChartLiberia(){
    this.canvas = document.getElementById('BarChartliberia');
    this.ctx = this.canvas.getContext('2d');
    
    var myChart = new Chart(this.ctx, {
        type: 'bar',
        data: {
            labels:this.liberiaDate,
            datasets: [{
                label: 'Confirm Cases',
                data: this.liberiaConfirm,
                backgroundColor:'#DDD101',
                fill: false
            },
          {
            label: 'Recovered Cases',
                data: this.liberiaDeath,
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
  lineStepliberia(){
    this.canvas = document.getElementById('liberiaStepped');
    this.ctx = this.canvas.getContext('2d');
    
    var myChart = new Chart(this.ctx, {
        type: 'line',
        data: {
            labels:this.liberiaDate,
            datasets: [{
                label: 'Confirm Cases',
                data: this.liberiaConfirm,
                backgroundColor:'#DDD101',
                borderColor:'#DDD101',
                fill: false,
                steppedLine:true
            },
           {
               label: 'Death Cases',
                data: this.liberiaDeath,
                backgroundColor:'#FF3333',
                borderColor:'#FF3333',
                fill:false,
                steppedLine:true
            }],
        },
        options:{
          legend:{position:"bottom"},
          responsive: true,
        }
        }
    );
  }
   /////////////////////// Sierra //////////////////////////////////////////////
   lineChartSierra(){
    this.canvas = document.getElementById('sierraCanvas');
    this.ctx = this.canvas.getContext('2d');
    
    var myChart = new Chart(this.ctx, {
        type: 'line',
        data: {
            labels:this.sierraDate,
            datasets: [{
                label: 'Confirm Cases',
                data: this.sierraConfirm,
                backgroundColor:'#DDD101',
                borderColor:'#DDD101',
                fill: false
            },
        
           {
               label: 'Death Cases',
                data: this.sierraDeath,
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
  HoribarChartSierra(){
    this.canvas = document.getElementById('HoriChartsierra');
    this.ctx = this.canvas.getContext('2d');
    
    var myChart = new Chart(this.ctx, {
        type: 'horizontalBar',
        data: {
            labels:this.sierraDate,
            datasets: [{
                label: 'Confirm Cases',
                data: this.liberiaConfirm,
                backgroundColor:'#DDD101',
                fill: false
            },
          {
            label: 'Recovered Cases',
                data: this.liberiaDeath,
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
  barChartSierra(){
    this.canvas = document.getElementById('BarChartSierra');
    this.ctx = this.canvas.getContext('2d');
    
    var myChart = new Chart(this.ctx, {
        type: 'bar',
        data: {
            labels:this.sierraDate,
            datasets: [{
                label: 'Confirm Cases',
                data: this.liberiaConfirm,
                backgroundColor:'#DDD101',
                fill: false
            },
          {
            label: 'Recovered Cases',
                data: this.sierraDeath,
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
  lineStepSierra(){
    this.canvas = document.getElementById('sierraStepped');
    this.ctx = this.canvas.getContext('2d');
    
    var myChart = new Chart(this.ctx, {
        type: 'line',
        data: {
            labels:this.sierraDate,
            datasets: [{
                label: 'Confirm Cases',
                data: this.sierraConfirm,
                backgroundColor:'#DDD101',
                borderColor:'#DDD101',
                fill: false,
                steppedLine:true
            },
           {
               label: 'Death Cases',
                data: this.sierraDeath,
                backgroundColor:'#FF3333',
                borderColor:'#FF3333',
                fill:false,
                steppedLine:true
            }],
        },
        options:{
          legend:{position:"bottom"},
          responsive: true,
        }
        }
    );
  }
  //////////////////////////////////////////// Country ////////////////////////////////////
  lineChart(){
    this.canvas = document.getElementById('countryChart');
    this.ctx = this.canvas.getContext('2d');
    
    var myChart = new Chart(this.ctx, {
        type: 'line',
        data: {
            labels: this.guineaDate,
            datasets: [{
                label: 'Guinea-Cases',
                data: this.guineaConfirm,
                backgroundColor:'#DDD101',
                borderColor:'#DDD101',
                fill: false
            },
        
           {
               label: 'liberia-Cases',
                data: this.liberiaConfirm,
                backgroundColor:'#3944F7',
                borderColor:'#3944F7',
                fill:false
            },
            {
              label: 'sierra-Cases',
               data: this.sierraConfirm,
               backgroundColor:'#FF3333',
               borderColor:'#FF3333',
               fill:false
           }],
            
        },
        options:{
          legend:{position:"bottom"},
          responsive: true,
          title: { display: true, text: 'Confirm Cases Chart' },
        }
        }
    );
  }
  lineChartDeaths(){
    this.canvas = document.getElementById('countryChartdeath');
    this.ctx = this.canvas.getContext('2d');
    
    var myChart = new Chart(this.ctx, {
        type: 'line',
        data: {
            labels: this.guineaDate,
            datasets: [{
                label: 'Guinea-Cases',
                data: this.guineaDeath,
                backgroundColor:'#DDD101',
                borderColor:'#DDD101',
                fill: false
            },
        
           {
               label: 'liberia-Cases',
                data: this.liberiaDeath,
                backgroundColor:'#3944F7',
                borderColor:'#3944F7',
                fill:false
            },
            {
              label: 'sierra-Cases',
               data: this.sierraDeath,
               backgroundColor:'#FF3333',
               borderColor:'#FF3333',
               fill:false
           }],
            
        },
        options:{
          legend:{position:"bottom"},
          responsive: true,
          title: { display: true, text: 'Death Cases Chart' },
        }
        }
    );
  }
  barChart(){
    this.canvas = document.getElementById('barChart');
    this.ctx = this.canvas.getContext('2d');
    
    var myChart = new Chart(this.ctx, {
        type: 'bar',
        data: {
            labels: this.guineaDate,
            datasets: [{
                label: 'Guinea-Cases',
                data: this.guineaConfirm,
                backgroundColor:'#DDD101',
                borderColor:'#DDD101',
                fill: false
            },
        
           {
               label: 'liberia-Cases',
                data: this.liberiaConfirm,
                backgroundColor:'#3944F7',
                borderColor:'#3944F7',
                fill:false
            },
            {
              label: 'sierra-Cases',
               data: this.sierraConfirm,
               backgroundColor:'#FF3333',
               borderColor:'#FF3333',
               fill:false
           }],
            
        },
        options:{
          legend:{position:"bottom"},
          responsive: true,
          title: { display: true, text: 'Confirm Cases Chart' },
        }
        }
    );
  }
  horiChartDeaths(){
    this.canvas = document.getElementById('countryBardeath');
    this.ctx = this.canvas.getContext('2d');
    
    var myChart = new Chart(this.ctx, {
        type: 'horizontalBar',
        data: {
            labels: this.guineaDate,
            datasets: [{
                label: 'Guinea-Cases',
                data: this.guineaDeath,
                backgroundColor:'#DDD101',
                borderColor:'#DDD101',
                fill: false
            },
        
           {
               label: 'liberia-Cases',
                data: this.liberiaDeath,
                backgroundColor:'#3944F7',
                borderColor:'#3944F7',
                fill:false
            },
            {
              label: 'sierra-Cases',
               data: this.sierraDeath,
               backgroundColor:'#FF3333',
               borderColor:'#FF3333',
               fill:false
           }],
            
        },
        options:{
          legend:{position:"bottom"},
          responsive: true,
          title: { display: true, text: 'Death Cases Chart' },
        }
        }
    );
  }
}