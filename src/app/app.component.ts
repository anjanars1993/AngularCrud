import { Component } from '@angular/core';
import { Event,Router,NavigationStart,NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loader:boolean=true;
  constructor(private _router:Router){
    this._router.events.subscribe((route:Event)=>{
    if(route instanceof NavigationStart)
    {
      this.loader=true;
    }
    if(route instanceof NavigationEnd ||
      route instanceof NavigationCancel ||
      route instanceof NavigationError )
    {
      this.loader=false;
    }
    })
  }
}
