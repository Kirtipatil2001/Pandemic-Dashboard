import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Chart } from 'chart.js';
import { ToastrService } from 'ngx-toastr';

declare var $:any;
@Component({
  selector: 'app-app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.css']
})

export class AppDashboardComponent {
  //api variable for data
  user:any;
  data:any;
  newNc:any;
  newNr:any;
  newNd:any;
  countryName:any;
  //Charts variable
  ctx:any;
  canvas:any;
  //APi data for selected country
  selectCountry:any;
  dataSelected:any;
  totalConfirm:any;
  totalRecovered:any;
  totalDeath:any;
  totalData:any;
  ConvertedData:any;
  Country:any;
  sortData:any;
  //For Modal
   open:any;
  
   //call for charts and fetch api data
  ngAfterViewInit() {
    Chart.defaults.global.defaultFontColor = 'white';
    setTimeout(()=>{
      this.init()
    },100);
  }
  
  constructor(private apiService: ApiService,
    private toastr: ToastrService
  ){ 
    this.ngAfterViewInit()
  }

  //Modal Open
  openModal(){
    $('#staticBackdrop').modal('show')
    }

  closeModal(){
     $('#staticBackdrop').modal('hide')
   } 

  // Country Data from Day one
  getCountryValue(selectCountry:any){
    this.apiService.getValueCountry(this.selectCountry)
    this.dataSelectedCountry();
    this.openModal()
  }

  ngOnInit(): void {
    // api data of country for table view
    this.apiService.getData().toPromise().then((response)=>{
      this.user = JSON.stringify(Object(response));
      this.data = JSON.parse(this.user);
      let globalData = this.data;
      //country data for table
      this.countryName = globalData.Countries;
    }).catch(err=>{
      console.log(err)
      this.toastr.error("API is Down")
      this.toastr.info("For Data we are using a open source API of Covid-19")
    });
  }

  sort(){
    this.sortData = this.countryName.sort((a:any,b:any)=>{
        return a.TotalConfirmed == b.TotalConfirmed?0
              :a.TotalConfirmed>b.TotalConfirmed?1:-1
   })
  }

  reverse(){
    this.sortData = this.countryName.reverse()
  }

 // Main Data Of Covid-19 in charts form
  mychart(newTc:number, newTr:number, newTd:number){
    this.canvas = document.getElementById('mychart');
    this.ctx = this.canvas.getContext('2d');
    
    var myChart = new Chart(this.ctx, {
        type: 'doughnut',
        data: {
            labels: ['Total Confirmed','Recovered','Death'  ],
            datasets: [{
                label: 'Covid-19',
                data: [this.newNc, this.newNr,this.newNd],
                weight:1,
                order:2,
                backgroundColor: [
                  'rgba(255, 255, 74, 1)',
                  '#99FF33',
                  '#FF3333' 
                ],
                borderColor: [
                  'rgba(255, 255, 74, 1)',
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
          title: { display: true, text: 'Pie Chart' },
          animation: { animateScale: true, animateRotate: true },
          cutoutPercentage: 70
      }
    });
  }

  polarChart(newTc:number, newTr:number, newTd:number){
    this.canvas = document.getElementById('polarchart');
    this.ctx = this.canvas.getContext('2d');
  
   var myChart = new Chart(this.ctx, {
      type: 'polarArea',
      data: {
          labels: ['Total Confirmed','Recovered','Death'  ],
          datasets: [{
              label: 'Covid-19',
              data: [this.newNc, this.newNr,this.newNd],
              weight:1,
              order:2,
              backgroundColor: [
                'rgba(255, 255, 74, 1)',
                '#99FF33',
                '#FF3333'  
              ],
              borderColor: [
                'rgba(255, 255, 74, 1)',
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
        title: { display: true, text: 'Polar Chart' },
        animation: { animateScale: true, animateRotate: true },
        cutoutPercentage: 70
    }
  });
  }
  radarChart(newTc:number, newTr:number, newTd:number){
    this.canvas = document.getElementById('radarchart');
    this.ctx = this.canvas.getContext('2d');
  
   var myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
          labels:['Confirm-Cases','Recovered-Cases', 'Death-Cases'],
          datasets: [{
              label: 'Confirm',
              data: [0,this.newNc],
              weight:1,
              order:2,
              borderColor: [
                'rgba(255, 255, 74, 1)',
               
              ],
              borderWidth: 2
          },
          {
            label: 'Recovered',
            data:  [0,this.newNr],
            weight:1,
            order:2,
            borderColor: [
              '#99FF33'  
            ],
            borderWidth: 2
        },
        {
          label: 'Death',
          data: [0,this.newNd],
          weight:1,
          order:2,
          borderColor: [
            '#FF3333'  
          ],
          borderWidth: 2
      }], 
      },
      options: {
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        responsive: true,
        legend: { position: 'bottom',},
        title: { display: true, text: 'Line Chart', },
        animation: { animateScale: true, animateRotate: true },
        cutoutPercentage: 70
    }
  });
}
 barChart(newTc:number, newTr:number, newTd:number){
  this.canvas = document.getElementById('barchart');
  this.ctx = this.canvas.getContext('2d');
  
  var myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
          labels: ['Total Confirmed','Recovered','Death'  ],
          datasets: [{
              label: 'Covid-19',
              data: [this.newNc, this.newNr,this.newNd],
              weight:1,
              order:2,
              backgroundColor: [
                'rgba(255, 255, 74, 1)',
                '#99FF33',
                '#FF3333' 
              ],
              borderColor: [
                'rgba(255, 255, 74, 1)',
                '#99FF33',
                '#FF3333'  
              ],
              borderWidth: 2
          } ,],
          
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
//chart api data
init(){
 
  this.apiService.getData().toPromise().then((response)=>{
    this.user = JSON.stringify(Object(response));
    this.data = JSON.parse(this.user);
    let globalData = this.data;

    this.newNc = globalData.Global.TotalConfirmed;
    this.newNr = globalData.Global.TotalRecovered;
    this.newNd = globalData.Global.TotalDeaths;
    this.mychart(this.newNc,this.newNr,this.newNd);
    this.polarChart(this.newNc,this.newNr, this.newNd)
    this.radarChart(this.newNc,this.newNr, this.newNd)
    this.barChart(this.newNc,this.newNr, this.newNd)
  }); 
}
////////////////////////////Countrywise Charts//////////////////////////////////////////
barChartDetail(dates:Date, tConfirmed:number, tRecovered:number, tDeaths:number){
  this.canvas = document.getElementById('detailedBarChart');
  this.ctx = this.canvas.getContext('2d');
  
  var myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
          labels:this.dataSelected,
          datasets: [{
              label: 'Confirm Cases',
              data: this.totalConfirm,
              backgroundColor:'#DDD101',
              fill: false
          },
        {
          label: 'Recovered Cases',
              data: this.totalRecovered,
              backgroundColor:'#00D84A',
              fill:false
        },
      {
        label: 'Death Cases',
              data: this.totalDeath,
              backgroundColor:'#E21717',
              fill:false
      }],
          
      },
      options:{
        legend:{position:"bottom"},
        responsive: true,
        scales: {
          xAxes: [ {
              display: true,
              type: 'time',
            }
          ],
        
        }
      }
      }
  );
}

horiChartDetail(dates:Date, tConfirmed:number, tRecovered:number, tDeaths:number){
  this.canvas = document.getElementById('HoriChart');
  this.ctx = this.canvas.getContext('2d');
  
  var myChart = new Chart(this.ctx, {
      type: 'radar',
      data: {
          labels: this.dataSelected,
          datasets: [{
              label: 'Confirm Cases',
              data: this.totalConfirm,
              backgroundColor:'#DDD101',
              borderColor:'#DDD101',
              fill: false
          },
        {
          label: 'Recovered Cases',
              data: this.totalRecovered,
              backgroundColor:'#00D84A',
              borderColor:'#00D84A',
              fill:false
        },
      {
        label: 'Death Cases',
              data: this.totalDeath,
              backgroundColor:'#E21717',
              borderColor:'#E21717',
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

lineSteppedChart(dates:Date, tConfirmed:number, tRecovered:number, tDeaths:number){
  this.canvas = document.getElementById('lineStepped');
  this.ctx = this.canvas.getContext('2d');
  
  var myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
          labels:this.dataSelected,
          datasets: [{
              label: 'Confirm Cases',
              data: this.totalConfirm,
              backgroundColor:'#DDD101',
              borderColor:'#DDD101',
              fill: false,
              steppedLine:true
          },
         {
             label: 'Death Cases',
              data: this.totalDeath,
              backgroundColor:'#00D84A',
              borderColor:'#00D84A',
              fill:false,
              steppedLine:true
          },
          {
            label: 'Recovered Cases',
             data: this.totalRecovered,
             backgroundColor:'#FF3333',
             borderColor:'#FF3333',
             fill:false,
             steppedLine:true
         }],
      },
      options:{
        legend:{position:"bottom"},
        responsive: true,
        scales: {
          xAxes: [ {
              display: true,
              type: 'time',
            }
          ],
        
        }
      }
      }
  );
}

lineChartDetail(dates:Date, tConfirmed:number, tRecovered:number, tDeaths:number){
  this.canvas = document.getElementById('detailedLineChart');
  this.ctx = this.canvas.getContext('2d');
  
  var myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
          labels:this.dataSelected,
          datasets: [{
              label: 'Confirm Cases',
              data: this.totalConfirm,
              backgroundColor:'#DDD101',
              borderColor:'#DDD101',
              fill: false
          },
        {
          label: 'Recovered Cases',
              data: this.totalRecovered,
              backgroundColor:'#00D84A',
              borderColor:'#00D84A',
              fill:false
        },
      {
        label: 'Death Cases',
              data: this.totalDeath,
              backgroundColor:'#E21717',
              borderColor:'#E21717',
              fill:false
      }],
      },
      options:{
        legend:{position:"bottom"},
        responsive: true,
        scales: {
          xAxes: [ {
              display: true,
              type: 'time',
            }
          ],
        
        }
      }
      }
  );
}

// Api data for Selected Country
  dataSelectedCountry(){
    this.apiService.getCountryData().subscribe(res=>{
      this.dataSelected = res.map((date:{Date:any}) =>{
        return date.Date
      })
      this.totalConfirm = res.map((confirm:{Confirmed:any}) =>{
        return confirm.Confirmed
      })
      this.totalRecovered = res.map((recover:{Recovered:any})=>{
        return recover.Recovered
      })
      this.totalDeath = res.map((death:{Deaths:any})=>{
        return death.Deaths
      })
      this.Country = res.map((country:{Country:any}) =>{
        return country.Country
      })

      this.barChartDetail(this.dataSelected,this.totalConfirm, this.totalRecovered, this.totalDeath);
      this.lineChartDetail(this.dataSelected,this.totalConfirm, this.totalRecovered, this.totalDeath);
      this.lineSteppedChart(this.dataSelected,this.totalConfirm, this.totalRecovered, this.totalDeath);
      this.horiChartDetail(this.dataSelected,this.totalConfirm, this.totalRecovered, this.totalDeath);
      this.totalData = JSON.stringify(Object(res));
      this.ConvertedData = JSON.parse(this.totalData)
      let globalData = this.ConvertedData;
    })
  }

}
