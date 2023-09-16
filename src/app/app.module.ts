import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

//------Component-----//
import { AppComponent } from './app.component';
import { KezdoComponent } from './kezdo/kezdo.component';
import { FeljecComponent } from './feljec/feljec.component';
import { KepekComponent } from './kepek/kepek.component';
import { BejelentkezesComponent } from './bejelentkezes/bejelentkezes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//-----Materials-----//

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import { HivasokService, alapurl } from './services/hivasok.service';

export function geturl(): string{
  return "https://jsonplaceholder.typicode.com"
}

@NgModule({
  declarations: [
    AppComponent,
    KezdoComponent,
    FeljecComponent,
    KepekComponent,
    BejelentkezesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    //---materials---//

    MatButtonModule,
    MatDividerModule,
    MatIconModule,

  ],
  providers: [
    HivasokService,
    {provide:alapurl, useFactory:geturl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
