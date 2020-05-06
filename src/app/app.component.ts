import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'bmi-calc';
  Kilograms: number;
  Centimeters: number;
  answer: number;

 click() {
   this.answer = this.Kilograms / Math.pow (this.Centimeters / 100, 2 )
  //  Formula: weight (kg) / [height (m)]2
 }


}

