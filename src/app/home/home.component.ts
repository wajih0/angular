import { Component } from '@angular/core';
import {StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 

})
export class HomeComponent {
 
  stars: number[] = [1, 2, 3, 4, 5];
  selectedStar: number = 5;

  rate(star: number) {
    this.selectedStar = star;
  }
  
}
