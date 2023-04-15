import { Component, OnInit } from '@angular/core';
import { RickandmortyapiService } from '../rickandmortyapi.service';

@Component({
  selector: 'ventas-habitat-prueba2',
  templateUrl: './prueba2.component.html',
  styleUrls: ['./prueba2.component.scss'],
})
export class Prueba2Component implements OnInit  {


  
  personajesRick: any = [];
  data: any = [];
  add: any =[];
  amount = 0;
  addAmount = 0;
  search = '';
  categoria = '';
  alive = false;
  deceased = false;
  checked = true;

  
  constructor(private ricjandmortyapi: RickandmortyapiService) { }

  ngOnInit(): void {
    this.personajes();
  }

  personajes(){
    this.ricjandmortyapi.getRickandMorty().subscribe(
      res =>{
        this.personajesRick = res;
        console.log("🚀 ~:", this.personajesRick.results)
        this.data = this.personajesRick.results;
        this.amount = this.data.length;
      }
    )
  }

  searchCharacters(){
    this.data = this.personajesRick.results;
    if(this.alive){
      this.deceased = false
      let data = [];
      data = this.data.filter( (n: any)=>{
        return n.status === "Alive"
      })
      this.data = data;
    }
    if(this.deceased){
      this.alive = false
      let data = [];
      data = this.data.filter( (n: any)=>{
        return n.status === "Dead"
      })
      this.data = data;
    }
    if(this.categoria !== ''){
      let data = [];
      data = this.data.filter( (n: any)=>{
        return n.species === this.categoria;
      })
      this.data = data;
    }
    
    this.amount = this.data.length;
  }

  radioChangeHandler(data: any){
    console.log(data)
    this.categoria = data.target.defaultValue
    console.log("🚀 ~ file: prueba2.component.ts:66 ~ Prueba2Component ~ radioChangeHandler ~ this.categoria:", this.categoria)
  }
  addCharacter( target: any){
    this.addAmount = 0;
    console.log(target)
    this.add.push(target)
    this.addAmount = this.add.length;
  }
  deleteCharacter(data: any){
    const idToDelete = data.id;
    const index = this.add.findIndex((user: any) => user.id === idToDelete);
    if (index !== -1) {
      this.add.splice(index, 1);
    }

    console.log(data)
  }
}
