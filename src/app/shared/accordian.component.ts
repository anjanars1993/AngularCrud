import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent {
@Input() isJustViewed:boolean;
@Input() title:string|null;
@Input() hidden:boolean=true;
}
