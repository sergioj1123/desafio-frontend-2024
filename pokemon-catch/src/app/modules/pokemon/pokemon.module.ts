import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { PokemonService } from './services/pokemon.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PokemonInfoComponent],
  imports: [CommonModule, RouterModule],
  providers: [PokemonService],
})
export class PokemonModule {}
