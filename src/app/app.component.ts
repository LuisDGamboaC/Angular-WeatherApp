import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from './weather-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weather-app-v2';
  city: string = '';
  weatherData$: any;
  londonWeather: any;
  berlinWeather: any;
  chicagoWeather: any;
  isLoading = false;
  
  constructor(private weatherService: WeatherServiceService, private router: Router) {}


  ngOnInit(): void {
    this.weatherService.getLondonWeather().subscribe((data) => {
      this.londonWeather = data;
    });
    this.weatherService.getBerlinWeather().subscribe((data) => {
      this.berlinWeather = data;
    });    
    this.weatherService.geChicagoWeather().subscribe((data) => {
      this.chicagoWeather = data;
    });
  }
  getWeather() {
      
    this.isLoading = true;
      
      setTimeout(() => {
        this.weatherService.getWeather(this.city).subscribe((data) => {
        this.weatherData$ = data;
        this.isLoading = false;
      });
      }, 2000);


  }



}
