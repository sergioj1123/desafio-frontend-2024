import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormWeatherComponent } from './form-weather/form-weather.component';
import { TextDirective } from '../../shared/directives/text.directive';
import { FormsModule } from '@angular/forms';
import { CityInformationComponent } from './city-information/city-information.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { WeatherService } from './services/weather.service';
import { RouterModule } from '@angular/router';
import { ErrorLabelComponent } from '../../shared/components/error-label/error-label.component';

@NgModule({
  declarations: [
    FormWeatherComponent,
    TextDirective,
    CityInformationComponent,
    ButtonComponent,
    ErrorLabelComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  providers: [WeatherService],
  exports: [ButtonComponent, ErrorLabelComponent],
})
export class WeatherModule {}
