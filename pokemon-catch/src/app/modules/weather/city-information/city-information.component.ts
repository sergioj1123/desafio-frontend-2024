import { Component, OnInit } from '@angular/core';
import { WeatherDataBehaviorService } from '../../../shared/services/weather-data-behavior.service';
import { Weather } from '../../../shared/models/weather.model';
import { isRainy } from '../../../shared/utils/functions';

@Component({
  selector: 'city-information',
  templateUrl: './city-information.component.html',
  styleUrl: './city-information.component.scss',
})
export class CityInformationComponent implements OnInit {
  isRainy = isRainy;
  constructor(private weatherData: WeatherDataBehaviorService) {}
  receivedWeather: Weather[] = [];
  ngOnInit(): void {
    this.weatherData.currentData.subscribe({
      next: (weather) => {
        this.receivedWeather = [weather];
      },
    });
  }
  getWeatherIcon(icon: any): string {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }
}
