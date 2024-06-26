import { HttpClient, HttpHeaders, HttpParams, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocationDetails } from '../Models/LocationDetails';
import { WeatherDetails } from '../Models/WeatherDetails';
import { TemperatureData } from '../Models/TemperatureData';
import { TodayData } from '../Models/TodayData';
import { WeekData } from '../Models/WeekData';
import { TodaysHighlight } from '../Models/TodaysHighlight';
import { Observable } from 'rxjs';
import { EnvironmentalVariables } from "../Environment/EnvironmentVariables";
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  //variables which will be filled by api end points
  locationDetails?: LocationDetails;
  weatherDetails?: WeatherDetails;

  //variables that have the extracted data from the api endpoint variables
  temperatureData: TemperatureData = new TemperatureData();// left container data
  
  todaydata: TodayData[] = []; //right container Todaydata
  weekData: WeekData[] = [];   //right container weekdata

  todaysHighlight?: TodaysHighlight =new TodaysHighlight(); //right container TodaysHighlight
  
  //variables to be used for api call
  cityName:string ='Mumbai';
  language:string ='en-US';
  date:string = '20240622';
  units: string = 'm';
  // Variable holding current Time 
  currentTime:Date ;
  
  // valiables to control tabs
  today:boolean=false;
  week:boolean= true;

  // valiables to control matric value
  celsius:boolean = true;
  fahrenheit: boolean = false;




  constructor(private httpClient: HttpClient) { 
    this.getData();

  }

  getSummaryImage(summary:string):string{
    //base folder address containing the images 

    var baseAddress = 'assets/';
    
    //respective image names
    var cloudSunny = 'cloudyandsunny.png';
    var rainSunny = 'rainyandsunny.png';
    var windy = 'wind.png';
    var rainy = 'rain.png';
    var sunny = 'sun.png';


    if(String(summary).includes("Partly Cloudy") || String(summary).includes("P Cloudy"))return baseAddress + cloudSunny;
    else if(String(summary).includes("Partly Rainy") || String(summary).includes("P Rainy"))return baseAddress + rainSunny;
    else if(String(summary).includes("wind") || String(summary).includes("p Windy"))return baseAddress + windy;
    else if(String(summary).includes("rain") )return baseAddress + rainy;

    else if(String(summary).includes("Sun") )return baseAddress + sunny;

    return baseAddress + cloudSunny;
  }

//Function methoid to create a chunk for left container using model TemperatureData.ts
  fillTemperatureDataModel(){
    this.currentTime = new Date();
    this.temperatureData.day = this.weatherDetails['v3-wx-observations-current'].dayOfWeek;
    this.temperatureData.time = `${String(this.currentTime.getHours()).padStart(2,'0')}:${String(this.currentTime.getMinutes()).padStart(2,'0')}`;
    this.temperatureData.temperature = this.weatherDetails ['v3-wx-observations-current'].temperature;
    this.temperatureData.location = `${this.locationDetails.location.city[0]},${this.locationDetails.location.country}`;
    this.temperatureData.rainPercent = this.weatherDetails['v3-wx-observations-current'].precip24Hour;
    this.temperatureData.summaryPhrase = this.weatherDetails['v3-wx-observations-current'].wxPhraseMedium;
    this.temperatureData.summaryImage = this.getSummaryImage(this.temperatureData.summaryPhrase);

  }

  //Function methoid to create a chunk for Right container using model WeekData.ts
  fillWeekData(){
    var weekCount = 0;

    while(weekCount < 7){
      this.weekData.push(new WeekData());
      this.weekData[weekCount].day = this.weatherDetails['v3-wx-forecast-daily-15day'].dayOfWeek[weekCount].slice(0,3);
      this.weekData[weekCount].tempMax = this.weatherDetails['v3-wx-forecast-daily-15day'].calendarDayTemperatureMax[weekCount].toString();
      this.weekData[weekCount].tempMin = this.weatherDetails['v3-wx-forecast-daily-15day'].calendarDayTemperatureMin[weekCount].toString();
      this.weekData[weekCount].summaryImage = this.getSummaryImage(this.weatherDetails['v3-wx-forecast-daily-15day'].narrative[weekCount]);
      weekCount++;
    
    }
  }

  //Function methoid to create a chunk for Right container using model TodayData.ts
  fillToday(){
    var todayCount = 0;

    while(todayCount < 7){
      this.todaydata.push(new TodayData());
      this.todaydata[todayCount].time = this.getTimeFromString(this.weatherDetails['v3-wx-forecast-hourly-10day'].validTimeLocal[todayCount]);
      this.todaydata[todayCount].temperature = this.weatherDetails['v3-wx-forecast-hourly-10day'].temperature[todayCount];
      this.todaydata[todayCount].summaryImage = this.getSummaryImage(this.weatherDetails['v3-wx-forecast-hourly-10day'].wxPhraseShort[todayCount]);  
      todayCount++; 
    }
  }

  getTimeFromString(LocalTime:string){
    return LocalTime.slice(11,16);

  }

  //method to get todays highlight data from the base variable
  fillTodaysHighlight(){
    this.todaysHighlight.airQuality = this.weatherDetails['v3-wx-globalAirQuality'].globalairquality.airQualityIndex;
    this.todaysHighlight.humidity = this.weatherDetails['v3-wx-observations-current'].precip24Hour;
    this.todaysHighlight.sunrise = this.getTimeFromString(this.weatherDetails['v3-wx-observations-current'].sunriseTimeLocal);
    this.todaysHighlight.sunset = this.getTimeFromString(this.weatherDetails['v3-wx-observations-current'].sunsetTimeLocal);
    this.todaysHighlight.uvIndex = this.weatherDetails['v3-wx-observations-current'].uvIndex;
    this.todaysHighlight.visibility = this.weatherDetails['v3-wx-observations-current'].visibility;
    this.todaysHighlight.windStatus = this.weatherDetails['v3-wx-observations-current'].windSpeed;
    


  } 


  //method to create usefull data chunks for UI using the data recieved from API 
  prepareData():void{
    //setting left container data Model Properties

    this.fillTemperatureDataModel();
    this.fillWeekData();
    this.fillToday();
    this.fillTodaysHighlight();
    console.log(this.temperatureData);
    console.log(this.weekData);
    console.log(this.todaydata);
    console.log(this.todaysHighlight);
  }

  celsiusToFahrenheit(celsius:number):number{
    return (celsius * 1.8) + 32;
  }

  fahrenheitToCelsius(fahrenheit:number):number{
    return (fahrenheit - 32) * 0.555;
  }


  //method to get location details from the api using the variable city name as the input


  getLocationDetails(cityName: string, language:string):Observable<LocationDetails>{
    return this.httpClient.get<LocationDetails>(EnvironmentalVariables.weatherApiLocationBaseURL,{
      headers: new HttpHeaders()
      .set(EnvironmentalVariables.xRapidApiKeyName,EnvironmentalVariables.xRapidApiKeyValue)
      .set(EnvironmentalVariables.xRapidApiHostName,EnvironmentalVariables.xRapidApiHostValue),
      params : new HttpParams()
      .set('query',cityName)
      .set('language',language)
    });
  }

  getWeatherReport(date:string, latitude:number, longitude:number, language: string, units: string):Observable<WeatherDetails>{
    return this.httpClient.get<WeatherDetails>(EnvironmentalVariables.weatherAPiForcastBaseURL,{
      headers: new HttpHeaders()
      .set(EnvironmentalVariables.xRapidApiKeyName,EnvironmentalVariables.xRapidApiKeyValue)
      .set(EnvironmentalVariables.xRapidApiHostName,EnvironmentalVariables.xRapidApiHostValue),
      params : new HttpParams()
      .set('date',date)
      .set('latitude',latitude)
      .set('longitude',longitude)
      .set('language',language)
      .set('units',units)

    });

  }

  getData(){
    var latitude = 0;
    var longitude = 0;
    this.getLocationDetails(this.cityName,this.language).subscribe({
      next:(response) => {
        this.locationDetails = response;    
        latitude = this.locationDetails?.location.latitude[0];
        longitude = this.locationDetails?.location.longitude[0];
        // console.log(this.locationDetails);

        //once we get the value for latitute and longitude we can call the get weather report method.
        this.getWeatherReport(this.date,latitude,longitude,this.language,this.units).subscribe({

          next: (response)=>{
            this.weatherDetails = response;
            // console.log(this.weatherDetails);

            this.prepareData();
          }
        })

    
      }
    });





  }
}
