import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Weather } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherDataBehaviorService {
  private dataSource = new BehaviorSubject<Weather>({});
  currentData = this.dataSource.asObservable();

  changeData(data: Weather) {
    this.dataSource.next(data);
  }
}
