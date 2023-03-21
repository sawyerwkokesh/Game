import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RuleBookComponent } from './rule-book/rule-book.component';
import { MapComponent } from './map/map.component';
import { FactionsComponent } from './factions/factions.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'rule-book', component: RuleBookComponent },
  { path: 'map', component: MapComponent},
  { path: 'factions', component: FactionsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
