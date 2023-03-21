import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent {
  private chart: am4maps.MapChart;

  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone) { }

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("chartdiv", am4maps.MapChart);

      chart.geodata = am4geodata_worldLow;
      chart.width = am4core.percent(100);
      chart.height = am4core.percent(100);
      chart.width = 1000;
      chart.height = 1000;

      // Set projection
      chart.projection = new am4maps.projections.EqualEarth();

      // Series for World map
      let worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
      worldSeries.exclude = ["AQ"];
      worldSeries.useGeodata = true;

      worldSeries;

      let polygonTemplate = worldSeries.mapPolygons.template;
      polygonTemplate.tooltipText = "{name}";
      polygonTemplate.fill = chart.colors.getIndex(0);
      polygonTemplate.nonScalingStroke = true;

      // Hover state
      // let hs = polygonTemplate.states.create("hover");
      // hs.properties.fill = am4core.color("#367B25");

      // Series for United States map
      // let usaSeries = chart.series.push(new am4maps.MapPolygonSeries());
      // usaSeries.geodata = am4geodata_usaLow;

      // let usPolygonTemplate = usaSeries.mapPolygons.template;
      // usPolygonTemplate.tooltipText = "{name}";
      // usPolygonTemplate.fill = chart.colors.getIndex(1);
      // usPolygonTemplate.nonScalingStroke = true;

      // Hover state
      // hs = usPolygonTemplate .states.create("hover");
      // hs.properties.fill = am4core.color("#367B25");




      var bgSeries = chart.series.push(new am4maps.MapImageSeries());
      bgSeries.toBack();
      var bgImage = bgSeries.mapImages.template.createChild(am4core.Image);
      bgImage.propertyFields.href = "src";
      bgImage.width = 1000;
      bgImage.height = 1000;
      bgSeries.data = [{
        src: "/assets/Images/Screenshot_2022-05-25_201802.png"
      }];



      var shapeSeries = chart.series.push(new am4maps.MapPolygonSeries());
      shapeSeries.data = [{
        "title": "Bermuda triangle",
        "polygon": [
          [
            [-20,20],
            [20,60],
            [60,60],
            [60,20],
            [20,20]
          ]
        ]
      },
      // {
      //   "title": "Bermuda triangle",
      //   "geoPolygon": [
      //     [
      //       {latitude: -90, longitude: -180},
      //       {latitude: -90, longitude: 180},
      //       {latitude: 90, longitude: 180},
      //       {latitude: 90, longitude: -180},
      //       {latitude: -90, longitude: -180},
      //     ]
      //   ]
      // }
    ];

      var shapeTemplate = shapeSeries.mapPolygons.template;
      shapeTemplate.stroke = am4core.color("#e33");
      // shapeTemplate.strokeWidth = 2;
      shapeTemplate.fill = shapeTemplate.stroke;
      shapeTemplate.fillOpacity = 0.2;
      // shapeTemplate.nonScalingStroke = true;


      this.chart = chart;
    });
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
