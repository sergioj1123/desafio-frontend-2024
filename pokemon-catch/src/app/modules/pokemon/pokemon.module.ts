import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { PokemonService } from './services/pokemon.service';
import { RouterModule } from '@angular/router';
import { WeatherModule } from '../weather/weather.module';

@NgModule({
  declarations: [PokemonInfoComponent],
  imports: [CommonModule, RouterModule, WeatherModule],
  providers: [PokemonService],
})
export class PokemonModule {}
