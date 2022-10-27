import { Component, OnInit } from '@angular/core';
import { LogginService } from './LogginService.service';
import { Persona } from './persona.model';
import { PersonasService } from './personas.service';
import  firebase from "firebase/compat/app";
import { LoginService } from './login/login.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  titulo = 'listado de Personas';

  constructor(private loginService:LoginService){
   
  }
  ngOnInit(): void{
      firebase.initializeApp({
        apiKey: "AIzaSyA4lyxQROf4eeTvLuXyAViQJMTuJGMjZ4Y",
        authDomain: "listado-personas-f90c5.firebaseapp.com",
      } )
  }

  isAutenticado(){
    return this.loginService.isAutenticado();
  }
  salir(){
    this.loginService.logOut();
  }
}


