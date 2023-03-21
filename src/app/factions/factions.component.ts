import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-factions',
  templateUrl: './factions.component.html',
  styleUrls: ['./factions.component.css']
})
export class FactionsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

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