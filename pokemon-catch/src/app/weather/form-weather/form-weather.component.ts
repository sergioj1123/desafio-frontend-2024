import { Component } from '@angular/core';
import { Weather } from '../../shared/models/weather.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-form-weather',
  templateUrl: './form-weather.component.html',
  styleUrl: './form-weather.component.scss',
})
export class FormWeatherComponent {
  weather: Weather[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    console.log(this.getWeatherByCity('Sete Lagoas'));
  }

  getWeatherByCity(city: string) {
    this.weatherService.getWeatherByCity(city).subscribe({
      next: (weather) => {
        this.weather = [weather];
      },
      error: (error) => {
        console.error(error + 'Erro ao buscar a previsão do tempo');
      },
    });
    return this.weather;
  }
}
