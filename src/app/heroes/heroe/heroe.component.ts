import { Component } from "@angular/core";



@Component(
    {
        selector: 'app-heroe',
        templateUrl: 'heroe.component.html'
    }
)
export class HeroeComponents{
    title: string = 'Contador App';
    numero: number =10;
    base : number=5;
  
    mas5(){
      this.base=this.base+5;
    }
    suma(){
      this.numero = this.numero+1;
    }
    acumular(valor: number){
  this.numero+=valor;
    }
}
