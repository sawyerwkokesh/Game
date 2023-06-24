import { checkDate } from '@amcharts/amcharts4/.internal/core/utils/Type';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public globalService: GlobalService) { 

  }

  CringeNames(){
    var cringeSwitch = document.getElementById("CringeNameUppdate");
    if(cringeSwitch.classList.contains("checked")){
      this.globalService.updateToFactionNames();
      cringeSwitch.classList.remove("checked")
    } else {
      this.globalService.updateToCringeNames();
      cringeSwitch.classList.add("checked")
    } 
    // console.log(this.globalService.currentNames.value.knight);
  }

  ngOnInit() {
    var topNavbarLinks = document.getElementById("top-navbar").getElementsByClassName("navbar-nav")[0].getElementsByTagName("a");
    Array.from(topNavbarLinks).forEach(navLink => {
      navLink.onclick = function() {
        Array.from(topNavbarLinks).forEach(link => {
          link.closest("li").classList.remove("active");
        })
        navLink.closest("li").classList.add("active");
      }
    })
  }
}
