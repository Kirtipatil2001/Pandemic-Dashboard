import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.css']
})
export class FooterNavComponent implements OnInit {

  constructor(
    private logoutuser: LoginService
  ) { }

  ngOnInit(): void {
  }

  refresh(){
    window.location.reload();
  }
  logout(){
    return this.logoutuser.logOutUser();
  }
  navOpen:any;
  navclose:any;
  closeNav(){
    this.navclose = document.getElementById("nav");
    if(this.navclose) this.navclose.style.width = "0%";
   
  }
  openNav(){
    this.navOpen = document.getElementById("nav")
    if(this.navOpen) this.navOpen.style.width = "100%"

  }
           
}
