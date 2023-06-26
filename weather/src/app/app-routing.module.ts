import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WeatherdisplayComponent} from "./home/weatherdisplay/weatherdisplay.component";

const routes: Routes = [
  { path: '', redirectTo: '/weather', pathMatch: 'full' },
  { path: 'weather', component: WeatherdisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
