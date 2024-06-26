import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from '../Services/weather.service';
import { RightContainerComponent } from '../right-container/right-container.component';





@Component({
  selector: 'app-left-container',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './left-container.component.html',
  styleUrl: './left-container.component.css',
})
export class LeftContainerComponent {
  
  //variables for font awesome icons 


  //variable for left-nav-bar search icons
  faLocation:any = faLocation;
  faMagnifyingGlass:any = faMagnifyingGlass;


  //variables for temp summary
  faCloud:any = faCloud;
  faCloudRain:any = faCloudRain;

  constructor(public weatherService:WeatherService){}
  

  onSearch(location:string){
    this.weatherService.cityName = location;
    this.weatherService.getData();
  }

}
