import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormWeatherComponent } from './weather/form-weather/form-weather.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'weather',
    pathMatch: 'full',
  },
  {
    path: 'weather',
    redirectTo: 'weather',
  },
  {
    path: 'weather',
    component: FormWeatherComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
