import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormWeatherComponent } from './modules/weather/form-weather/form-weather.component';
import { PokemonInfoComponent } from './modules/pokemon/pokemon-info/pokemon-info.component';

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
  { path: 'pokemon', component: PokemonInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
