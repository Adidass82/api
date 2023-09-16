import { Component } from '@angular/core';
import { FormBuilder,FormGroup, FormControl,Validators } from '@angular/forms';
import { HivasokService } from '../services/hivasok.service';
@Component({
  selector: 'app-bejelentkezes',
  templateUrl: './bejelentkezes.component.html',
  styleUrls: ['./bejelentkezes.component.css']
})
export class BejelentkezesComponent {

  myform:any;
  constructor(private bild:FormBuilder, private api:HivasokService){}
ngOnInit(){
  this.myform=this.bild.group({
    name:["",Validators.required], //validálás kitöltésre
    email:["",[Validators.required, Validators.email]] //validálás kitöltésre és email formátumra 

  })
}
get mail(){
  return this.myform.get("email")
}
kuldes(){
  console.log(this.myform.value)
  this.api.bekuldes(this.myform.value);
}
}
