import { Component, OnInit } from '@angular/core';
import { defaultLocaleWeekdays } from 'ngx-bootstrap/chronos/locale/locale.class';

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

  loadComponent() {
    var svg = document.getElementById("imperiumMap");
    var grainList = svg.getElementsByClassName("grain");
    var ironList = svg.getElementsByClassName("iron");
    var stoneList = svg.getElementsByClassName("stone");
    var livestockList = svg.getElementsByClassName("livestock");
    var woodList = svg.getElementsByClassName("wood");
    var goldList = svg.getElementsByClassName("gold");
    var moutainsList = svg.getElementsByClassName("moutains");
    
    var knightList = [9,10,11,12,13,14,15,16,17,19,69];
    var aztekList = [20,22,23,24,25,26,27,28,29,30];
    var greakList = [32,33,34,35,36,37,38,39,40,66];
    var japanList = [42,43,44,45,46,47,48,49,50,64];
    var mongol = [55,56,57,58,59,60,61,62,63,72,73,79,80];
    var vikings = [2,3,4,5,6,7,70,71,75,76];

    // var grainIdList = [];
    // Array.from(grainList).forEach(e => {grainIdList.push(e.id)});
    // Array.from(ironList).forEach(e => {ironIdList.push(e.id)});
    // Array.from(stoneList).forEach(e => {stoneIdList.push(e.id)});
    // Array.from(livestockList).forEach(e => {livestockIdList.push(e.id)});
    // Array.from(woodList).forEach(e => {woodIdList.push(e.id)});
    // console.log(grainIdList);

    // console.log(document.getElementById("legend-grain"));

    // grainList[1].parentNode.insertBefore(document.getElementById("legend-grain"), grainList[1].nextSibling);

    this.loadHoverEvents(svg, grainList, moutainsList);
    this.loadHoverEvents(svg, ironList, moutainsList);
    this.loadHoverEvents(svg, stoneList, moutainsList);
    this.loadHoverEvents(svg, livestockList, moutainsList);
    this.loadHoverEvents(svg, woodList, moutainsList);
    this.loadHoverEvents(svg, goldList, moutainsList);
    this.loadHoverEvents(svg, moutainsList, moutainsList);

    const mouseoverEvent = new Event('mouseover');
    const mouseoutEvent = new Event('mouseout');

    this.loadHoverLegendEvents("legend-grain", grainList, mouseoverEvent, mouseoutEvent);
    this.loadHoverLegendEvents("legend-iron", ironList, mouseoverEvent, mouseoutEvent);
    this.loadHoverLegendEvents("legend-stone", stoneList, mouseoverEvent, mouseoutEvent);
    this.loadHoverLegendEvents("legend-livestock", livestockList, mouseoverEvent, mouseoutEvent);
    this.loadHoverLegendEvents("legend-wood", woodList, mouseoverEvent, mouseoutEvent);
    this.loadHoverLegendEvents("legend-gold", goldList, mouseoverEvent, mouseoutEvent);
    this.loadHoverLegendEvents("legend-moutains", moutainsList, mouseoverEvent, mouseoutEvent);
  }

  private loadHoverLegendEvents(legendType: string, legendTypeList: HTMLCollectionOf<Element>, mouseoverEvent: Event, mouseoutEvent: Event) {
    document.getElementById(legendType).addEventListener("mouseover", function test() {
      legendTypeList[0].dispatchEvent(mouseoverEvent);
    });
    document.getElementById(legendType).addEventListener("mouseout", function test() {
      legendTypeList[0].dispatchEvent(mouseoutEvent);
    });
  }

  private loadHoverEvents(svg: HTMLElement, list: HTMLCollectionOf<Element>, moutains: HTMLCollectionOf<Element>) {
    // var fillColor = list[0].getAttribute("fill");
    Array.from(list).forEach(e => {
      e.addEventListener("mouseover", function fillItem() {
        Array.from(list).forEach(f => {
          svg.appendChild(f);
          // f.setAttribute("fill", "#9EC2F7");
          f.setAttribute("stroke-width", "8");
          // f.setAttribute("stroke", "blue");
          f.setAttribute("filter", "url(#shadow)");
          // f.setAttribute("fill-opacity", "50%");
        });
      });
      e.addEventListener("mouseout", function fillItem() {
        Array.from(list).forEach(f => {
          Array.from(moutains).forEach(m => {
            svg.appendChild(m);
          });

          // f.setAttribute("fill", fillColor);
          f.setAttribute("stroke-width", "1");
          // f.setAttribute("stroke", "black");
          f.setAttribute("filter", "");
          // f.setAttribute("fill-opacity", "100%");
        });
      });
    });
  }

  ngAfterViewInit() {
  }
}
