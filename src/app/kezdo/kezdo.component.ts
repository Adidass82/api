import { Component } from '@angular/core';
import{HivasokService}from "../services/hivasok.service"

@Component({
  selector: 'app-kezdo',
  templateUrl: './kezdo.component.html',
  styleUrls: ['./kezdo.component.css']
})
export class KezdoComponent {
adatok:any
constructor(private hivas:HivasokService){
this.hivas.beolvas().subscribe(result=>{
  this.adatok=result;
})
}

}
