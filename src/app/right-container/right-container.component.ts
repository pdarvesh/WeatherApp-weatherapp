import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from '../Services/weather.service';

@Component({
  selector: 'app-right-container',
  standalone: true,
  // imports: [],
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './right-container.component.html',
  styleUrl: './right-container.component.css',
})

export class RightContainerComponent {

  constructor(public weatherService: WeatherService){};

 //fa icon for thumbs up/down smile/frown
  faCloud:any = faCloud;
  faThumbsUp:any = faThumbsUp;
  faThumbsDown:any = faThumbsDown;
  faFaceSmile:any = faFaceSmile;
  faFaceFrown:any = faFaceFrown

//fuction to contol tab values or tab states

//function for click of Today
onTodayClick(){
  this.weatherService.week = false;
  this.weatherService.today = true;
}


//function for click of Week
onWeekClick(){
  this.weatherService.week = true
  this.weatherService.today = false;
}
//functions to control matric values---------

//function for click of metric celsius
onCelsiusClick(){
  this.weatherService.celsius = true;
  this.weatherService.fahrenheit = false;
}

//function for click of metric Fahrenheit
onFahrenheitClick(){
  this.weatherService.celsius = false;
  this.weatherService.fahrenheit = true;
}



}
