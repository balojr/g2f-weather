import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = 'ca3cba9313924bedba770304232206';
  private apiUrl = 'https://api.weatherapi.com/v1/future.json';

  constructor(private http: HttpClient) { }

  // getWeather(city: string, days: number) {
  //   return this.http.get(`${this.apiUrl}?key=${this.apiKey}&q=${city}&days=${days}`);
  // }
  getWeatherData(city: string, date: string) {
    const url = `${this.apiUrl}?key=${this.apiKey}&q=${city}&dt=${date}`;
    return this.http.get(url)
      .toPromise()
      .catch(error => console.error('Error fetching weather data:', error));
  }
}
