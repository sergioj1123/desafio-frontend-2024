import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  baseUrl = 'https://pokeapi.co/api/v2/';
  urlForType = '/type';
  urlForPokemon = '/pokemon';
  constructor(private httpClient: HttpClient) {}

  getPokemonByType(type: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + this.urlForType + '/' + type);
  }

  getPokemonByName(name: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + this.urlForPokemon + '/' + name);
  }
}
