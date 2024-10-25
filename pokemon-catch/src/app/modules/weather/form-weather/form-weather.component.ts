import { Component } from '@angular/core';
import { Weather } from '../../../shared/models/weather.model';
import { WeatherService } from '../services/weather.service';
import { WeatherDataBehaviorService } from '../../../shared/services/weather-data-behavior.service';

@Component({
  selector: 'app-form-weather',
  templateUrl: './form-weather.component.html',
  styleUrl: './form-weather.component.scss',
})
export class FormWeatherComponent {
  city: string = '';
  weather: Weather[] = [];

  constructor(
    private weatherService: WeatherService,
    private weatherData: WeatherDataBehaviorService
  ) {}

  ngOnInit() {}

  getWeatherFromApiAndSendToDataBehaviorService() {
    this.getWeatherByCity(this.city);
  }

  getWeatherByCity(city: string): Weather[] {
    this.weatherService.getWeatherByCity(city).subscribe({
      next: (weather) => {
        this.weather = [weather];
      },
      error: (error) => {
        console.error(error + 'Erro ao buscar a previsão do tempo');
      },
      complete: () => {
        this.sendDataToBehaviorSubject();
      },
    });
    return this.weather;
  }
  sendDataToBehaviorSubject() {
    this.weatherData.changeData(this.weather[0]);
  }
}
