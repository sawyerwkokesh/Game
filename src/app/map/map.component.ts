import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadComponent();

  }

  loadComponent(){
    var svg = document.getElementById("imperiumMap");
    var grainList = svg.getElementsByClassName("grain");
    var ironList = svg.getElementsByClassName("iron");
    var stoneList = svg.getElementsByClassName("stone");
    var livestockList = svg.getElementsByClassName("livestock");
    var woodList = svg.getElementsByClassName("wood");

    this.loadHoverEvents(grainList);
    this.loadHoverEvents(ironList);
    this.loadHoverEvents(stoneList);
    this.loadHoverEvents(livestockList);
    this.loadHoverEvents(woodList);

  }

  private loadHoverEvents(list: HTMLCollectionOf<Element>) {
    var fillColor = list[0].getAttribute("fill");
    Array.from(list).forEach(e => {
      e.addEventListener("mouseover", function fillItem() {
        Array.from(list).forEach(f => {
          f.setAttribute("fill", "#9EC2F7");
          f.setAttribute("stroke-width", "3");
          // f.setAttribute("fill-opacity", "50%");
        });
      });
      e.addEventListener("mouseout", function fillItem() {
        Array.from(list).forEach(f => {
          f.setAttribute("fill", fillColor);
          f.setAttribute("stroke-width", "1");
          // f.setAttribute("fill-opacity", "100%");
        });
      });
    });
  }

  ngAfterViewInit(){
  }
}
