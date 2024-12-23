import { Component, OnInit } from '@angular/core';
import { WeatherDataBehaviorService } from '../../../shared/services/weather-data-behavior.service';
import { Weather } from '../../../shared/models/weather.model';
import {
  changeHyphenToBlackSpace,
  convertFistLetterToUpperCase,
  isRainy,
} from '../../../shared/utils/functions';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrl: './pokemon-info.component.scss',
})
export class PokemonInfoComponent implements OnInit {
  constructor(
    private weatherData: WeatherDataBehaviorService,
    private pokemonService: PokemonService
  ) {}
  receivedWeather: Weather[] = [];
  pokemonType: string = '';
  currentPokemonName: string = '';
  pokemonList: any[] = [];
  pokemonInformation: any = {};
  errorMessage: string = '';
  isLoading: boolean = false;

  ngOnInit(): void {
    this.weatherData.currentData.subscribe({
      next: (weather) => {
        this.receivedWeather = [weather];
        this.pokemonType = this.executePokemonClassification();
        this.queryPokemonByType(this.pokemonType);
      },
    });
  }

  executePokemonClassification(): string {
    return this.pokemonClassificationsByRainAndTemperature(
      this.getTemperature() as number,
      isRainy(this.receivedWeather[0]?.weather?.[0]?.main)
    );
  }

  getTemperature(): number | undefined {
    return this.receivedWeather[0].main?.temp;
  }

  pokemonClassificationsByRainAndTemperature(
    temp: number,
    isRaining: boolean
  ): string {
    if (isRaining) return 'electric';
    if (temp < 5) return 'ice';
    if (temp >= 5 && temp < 10) return 'water';
    if (temp >= 12 && temp < 15) return 'grass';
    if (temp >= 15 && temp < 21) return 'ground';
    if (temp >= 23 && temp < 27) return 'bug';
    if (temp >= 27 && temp <= 33) return 'rock';
    if (temp > 33) return 'fire';
    return 'normal';
  }

  queryPokemonByType(pokemonType: string) {
    this.isLoading = true;
    this.pokemonService.getPokemonByType(pokemonType).subscribe({
      next: (pokemon) => {
        this.pokemonList = [pokemon];
      },
      error: (error) => {
        console.error(error);
        this.errorMessage =
          'Erro ao buscar a lista de pokemons. Mais detalhes no console.';
        this.pokemonList = [];
        this.isLoading = false;
      },
      complete: () => {
        this.RandomPokemon();
        this.queryPokemonByName(this.currentPokemonName);
        this.errorMessage = '';
      },
    });
    return this.pokemonList;
  }

  RandomPokemon() {
    const newPokemon =
      this.pokemonList[0].pokemon[
        Math.floor(Math.random() * this.pokemonList[0].pokemon.length)
      ].pokemon.name;
    this.verifyIfItsTheSamePokemon(newPokemon);
  }

  verifyIfItsTheSamePokemon(newPokemon: any) {
    newPokemon === this.currentPokemonName
      ? this.RandomPokemon()
      : (this.currentPokemonName = newPokemon) &&
        this.queryPokemonByName(this.currentPokemonName);
  }

  queryPokemonByName(pokemonName: string) {
    this.isLoading = true;
    this.pokemonService.getPokemonByName(pokemonName).subscribe({
      next: (pokemon) => {
        this.pokemonInformation = [pokemon];
      },
      error: (error) => {
        console.error(error);
        this.errorMessage =
          'Erro ao buscar o pokemon. Mais detalhes no console.';
        this.pokemonInformation = [];
        this.isLoading = false;
      },
      complete: () => {
        this.currentPokemonName = this.removeHyphenAndCapitalize(
          this.currentPokemonName
        );
        this.errorMessage = '';
        this.isLoading = false;
      },
    });
    return this.pokemonInformation;
  }

  getPokemonImage(): string {
    return this.pokemonInformation[0].sprites.front_default;
  }

  getPokemonTypes(): string[] {
    return this.pokemonInformation[0].types.map((type: any) =>
      this.removeHyphenAndCapitalize(type.type.name)
    );
  }

  getPokemonAbilities(): string[] {
    return this.pokemonInformation[0].abilities.map((ability: any) =>
      this.removeHyphenAndCapitalize(ability.ability.name)
    );
  }

  removeHyphenAndCapitalize(text: string): string {
    text = changeHyphenToBlackSpace(text);
    text = convertFistLetterToUpperCase(text);
    return text;
  }
}
