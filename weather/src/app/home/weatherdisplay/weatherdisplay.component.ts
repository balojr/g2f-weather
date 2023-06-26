
import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weatherdisplay',
  templateUrl: './weatherdisplay.component.html',
  styleUrls: ['./weatherdisplay.component.scss']
})
export class WeatherdisplayComponent implements OnInit{
  forecastData: any;
  hours: any;

  date = Date;

  thedate = new Date();
  // the seconds should reflect in real time

  dayImg = '/../assets/icons/fluent-emoji_face-in-clouds.svg';
  tempImg = '/../assets/icons/solar_temperature-line-duotone.svg';
  logo = '/../assets/images/logo.png';
  humidityImg = '/../assets/icons/material-symbols_humidity-mid.svg';
  windImg = '/../assets/icons/svg-spinners_wind-toy.svg';


  constructor(private weatherService: WeatherService) {
    this.thedate = new Date();
    setInterval(() => {
    this.thedate = new Date();
    }, 1000);
   }

  ngOnInit(): void {

    this.weatherService.getWeatherData()
    .subscribe(
      data => {
        this.forecastData = data;
        console.log(data);
      },
      error => {
        console.error('Error fetching weather data:', error);
      }
    );
  }

}
