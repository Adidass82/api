import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const alapurl= new InjectionToken<string>("alapurl");



@Injectable({
  providedIn: 'root'
})
export class HivasokService {

private myurl:string;

  constructor(private myhttp:HttpClient, @Optional() @Inject(alapurl) baseurl?:string ) {
    this.myurl=baseurl? baseurl: ""
   }
  beolvas(){
    return this.myhttp.get(this.myurl+"/todos")// honnan olvasok be
  }
  // egyszerübb modja a beolvasásnak
  kepbeolvas(){
    return this.myhttp.get("https://jsonplaceholder.typicode.com/photos");
  }
  //posztolása a beviteli mezöknek
  bekuldes(adat:any){
    let url="https://oraimunka-a8bc0-default-rtdb.firebaseio.com/"
    this.myhttp.post(url+"user12.json",adat).subscribe();
  }
}
