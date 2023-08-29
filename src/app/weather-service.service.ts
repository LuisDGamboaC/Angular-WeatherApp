import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  private apiKey = '7947cb00f9c88953d5021e73514c91'; //c1


  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const path =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
    return this.http.get(path)
  }

  getLondonWeather() {
    const path =  `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${this.apiKey}`
    return this.http.get(path)
  }

  getBerlinWeather() {
    const path =  `https://api.openweathermap.org/data/2.5/weather?q=Berlin&units=metric&appid=${this.apiKey}`
    return this.http.get(path)
  }

  geChicagoWeather() {
    const path =  `https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=metric&appid=${this.apiKey}`
    return this.http.get(path)
  }
}
