import { Component } from '@angular/core';
import{HivasokService}from "../services/hivasok.service"
@Component({
  selector: 'app-kepek',
  templateUrl: './kepek.component.html',
  styleUrls: ['./kepek.component.css']
})
export class KepekComponent {
  data: any;
  constructor(private apihivas:HivasokService){
  this.apihivas.beolvas().subscribe(res=>{
  this.data=res;
})
}
}
