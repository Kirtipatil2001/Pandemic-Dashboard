import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ebola',
  templateUrl: './ebola.component.html',
  styleUrls: ['./ebola.component.css']
})
export class EbolaComponent implements OnInit {

  constructor(
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
    this.toastr.info('The Data of Ebola taken from the Wikipedia')
  }
  
  buttonSpace:object = {
    "margin-right" : '5px',
    "margin-left": '5px'
  }
  buttonAlign:object = {
    "margin-top":'40px',
  }
  confirmedCases: string = '28616';
  deathCases: string = '11310'
 
}
