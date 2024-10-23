import { TestBed } from '@angular/core/testing';

import { WeatherDataBehaviorService } from './weather-data-behavior.service';

describe('WeatherDataBehaviorService', () => {
  let service: WeatherDataBehaviorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherDataBehaviorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
