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
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private weatherService: WeatherService,
    private weatherData: WeatherDataBehaviorService
  ) {}

  ngOnInit() {}

  getWeatherByCity(): Weather[] {
    this.isLoading = true;
    this.weatherService.getWeatherByCity(this.city).subscribe({
      next: (weather) => {
        this.weather = [weather];
      },
      error: (error) => {
        console.error(error);
        this.errorMessage =
          'Erro ao buscar a previsão do tempo. Mais detalhes no console.';
        this.weather = [];
        this.isLoading = false;
      },
      complete: () => {
        this.sendDataToBehaviorSubject();
        this.errorMessage = '';
        this.isLoading = false;
      },
    });
    return this.weather;
  }
  sendDataToBehaviorSubject() {
    this.weatherData.changeData(this.weather[0]);
  }
}
