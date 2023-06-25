import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // private apiKey = 'ca3cba9313924bedba770304232206';
  private apiUrl = 'https://api.weatherapi.com/v1/future.json?key=ca3cba9313924bedba770304232206&q=Nairobi, Kenya&dt=2023-07-25';

  constructor(private https: HttpClient) { }

  // getWeather(city: string, days: number) {
  //   return this.http.get(`${this.apiUrl}?key=${this.apiKey}&q=${city}&days=${days}`);
  // }
  getWeatherData(): Observable<any> {
    // const url = `${this.apiUrl}?key=${this.apiKey}&q=${city}%20&dt=${localtime}n`;
    return this.https.get(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching weather data:', error);
        return throwError('Something went wrong.');
      })
    );
  }
}
