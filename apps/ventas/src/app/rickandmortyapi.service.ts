import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyapiService {

  
  constructor(private __http : HttpClient) { }

  getRickandMorty(){
    return this.__http.get('https://rickandmortyapi.com/api/character');
  }
}
