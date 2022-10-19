import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector:"app-personas",
    templateUrl:"./personas.component.html",
    styleUrls:["./personas.component.css"]

} )

export class PersonasComponent{
    desabilitar=false;
    mensaje=""
    titulo="Ingeniero";
    mostrar=false;

    agregarPersona(){
        this.mostrar=true;
        this.mensaje="Persona agregada";
        
    }

    /**
     *  modificarTitulo(event:Event){
        console.log("entrando a titulo");
        this.titulo= (<HTMLInputElement>event.target).value;
    }
     */
   
}

