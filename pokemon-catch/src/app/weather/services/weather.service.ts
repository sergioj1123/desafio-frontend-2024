import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../../shared/models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = 'f51feafa9265350371a27cffa2cf79cb';
  lang = 'pt_br';
  units = 'metric';

  constructor(private httpClient: HttpClient) {}

  getWeatherByCity(city: string): Observable<Weather> {
    return this.httpClient.get<Weather>(this.baseUrl, {
      params: {
        q: city,
        appid: this.apiKey,
        lang: this.lang,
        units: this.units,
      },
    });
  }
}
