import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KepekComponent } from './kepek/kepek.component';
import {BejelentkezesComponent,} from './bejelentkezes/bejelentkezes.component'
import { KezdoComponent } from './kezdo/kezdo.component';


const routes: Routes = [
  {path:"kepek", component:KepekComponent},
  {path:"bejelentkezes", component:BejelentkezesComponent},
  {path:"kezdo", component:KezdoComponent},
  //----redirect-----//
  //betölti automatikusan a kezdö componenst//
  {path:"", redirectTo:"/kezdo", pathMatch:"full"},
  //----- vissza ugrik rossz cimnél a kezdö componensre----//
  {path:"**",redirectTo:"/kezdo"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
