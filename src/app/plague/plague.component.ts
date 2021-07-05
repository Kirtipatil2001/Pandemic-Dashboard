import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-plague',
  templateUrl: './plague.component.html',
  styleUrls: ['./plague.component.css']
})
export class PlagueComponent implements OnInit {

  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.toastr.info('The Data of Plague taken from the Wikipedia')
  }
  //Styling cards
  buttonSpace:object = {
    "margin-right" : '5px',
    "margin-left": '5px'
  }
  buttonAlign:object = {
    "margin-top":'40px',
  }
  confirmedCases: string = '13,522'
  deathCases: string = '1,621'
}
