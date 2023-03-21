import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RuleBookComponent } from './rule-book/rule-book.component';
import { MapComponent } from './map/map.component'; 

import { AppRoutingModule } from './app-routing.module';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RuleBookComponent,
    MapComponent,
    ChartComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
