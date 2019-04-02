import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainperrosPage } from '../mainperros/mainperros'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ///Evento que se ejecuta cuando se hace click en el boton "PERROS" de la pagina home
  onclick(){
    this.navCtrl.push(MainperrosPage);
  }

}
