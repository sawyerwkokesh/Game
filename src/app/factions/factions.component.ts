import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../services/global.service';
import { setTime } from 'ngx-bootstrap/chronos/utils/date-setters';

@Component({
  selector: 'app-factions',
  templateUrl: './factions.component.html',
  styleUrls: ['./factions.component.css']
})

export class FactionsComponent implements OnInit {
  knightTitle = this.globalService.currentNames.value.knight;
  
  setKnight(){
    this.knightTitle = this.globalService.currentNames.value.knight;
  }

  constructor(
    private route: ActivatedRoute,
    public globalService: GlobalService,
    ) { 
      document.getElementById('CringeNameUppdate').onclick = function() {
        console.log('here');
        var temp = globalService.currentNames.value.knight;
        console.log(temp);
      }
    }
    
  
  ngOnInit() {
    this.route.fragment.subscribe((fragment: string) => {

      if(typeof fragment!='undefined' && fragment){
        document.getElementsByClassName("faction-nav-link")[0].classList.remove("active");
        document.getElementsByClassName("tab-pane")[0].classList.remove("active");
        document.getElementById(fragment + "Faction").classList.add("active");
        document.getElementById(fragment).classList.add("active");
        window.scrollTo(0, 0);
     }
    })
  }
}


