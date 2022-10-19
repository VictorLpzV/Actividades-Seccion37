import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  nombre: string ="Victor";
  apellido:string="López";
  edad:number=20;
  
  /**
   *  Cuando es privato el parametro
  private edad:number=20;
  getEdad():number{
    return this.edad
  }

   */
 
}
