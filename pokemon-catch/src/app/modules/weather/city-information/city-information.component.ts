import { Component, OnInit } from '@angular/core';
import { WeatherDataBehaviorService } from '../../../shared/services/weather-data-behavior.service';
import { Weather } from '../../../shared/models/weather.model';
import {
  convertFistLetterToUpperCase,
  isRainy,
} from '../../../shared/utils/functions';

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

  getWeatherIcon(): string | undefined {
    return this.transformTheWeatherIconToUrl(
      this.receivedWeather[0].weather?.[0]?.icon?.toString()
    );
  }

  transformTheWeatherIconToUrl(icon: any): string {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }

  getWeatherCityName(): string | undefined {
    return this.receivedWeather[0].name;
  }

  getWeatherCityCountry(): string | undefined {
    return this.receivedWeather[0].sys?.country;
  }

  getWeatherCityTemperature(): number | undefined {
    return this.receivedWeather[0].main?.temp;
  }

  getWeatherDescription(): string | undefined {
    return convertFistLetterToUpperCase(
      this.receivedWeather[0].weather?.[0]?.description || ''
    );
  }

  getRainyStatus(): boolean {
    return this.isRainy(this.receivedWeather[0].weather?.[0]?.main?.toString());
  }
}
