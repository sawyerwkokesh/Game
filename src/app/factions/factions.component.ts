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
  japanTitle = this.globalService.currentNames.value.japan;
  knightTitle = this.globalService.currentNames.value.knight;
  vikingTitle = this.globalService.currentNames.value.viking;
  greekTitle = this.globalService.currentNames.value.greek;
  mongolTitle = this.globalService.currentNames.value.mongol;
  aztecTitle = this.globalService.currentNames.value.aztec;

  
  // setKnight(){
  //   this.japanTitle = this.globalService.currentNames.value.japan;
  //   this.knightTitle = this.globalService.currentNames.value.knight;
  //   this.vikingTitle = this.globalService.currentNames.value.viking;
  //   this.greekTitle = this.globalService.currentNames.value.greek;
  //   this.mongolTitle = this.globalService.currentNames.value.mongol;
  //   this.aztecTitle = this.globalService.currentNames.value.aztec;
  // }

  constructor(
    private route: ActivatedRoute,
    public globalService: GlobalService,
    ) { 
      document.getElementById('CringeNameUppdate').onclick = function() {
        $('.japanTitle').text(globalService.currentNames.value.japan);
        $('.knightTitle').text(globalService.currentNames.value.knight);
        $('.vikingTitle').text(globalService.currentNames.value.viking);
        $('.greekTitle').text(globalService.currentNames.value.greek);
        $('.mongolTitle').text(globalService.currentNames.value.mongol);
        $('.aztecTitle').text(globalService.currentNames.value.aztec);
      }

      this.globalService.currentNames.subscribe({
        next: newValue => console.log('Update Detected:', newValue)
      });
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


