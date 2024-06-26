import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftContainerComponent } from "./left-container/left-container.component";
import { RightContainerComponent } from "./right-container/right-container.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faLocation, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';




@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterOutlet, LeftContainerComponent, RightContainerComponent, FontAwesomeModule],
    // providers: [HttpClient],
})
export class AppComponent {
  static module(module: any) {
    throw new Error('Method not implemented.');
  }
  title = 'WeatherApp';
  faCoffee = faCoffee;
  faMagnifyingGlass = faMagnifyingGlass;
  faLocation = faLocation;

}

