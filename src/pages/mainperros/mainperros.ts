import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestPerrosProvider } from '../../providers/rest-perros/rest-perros';


/**
 * Generated class for the MainperrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-mainperros',
  templateUrl: 'mainperros.html',
})
export class MainperrosPage {
  //categorias = new Array();
  public _g_categorias: Array<{
    nombre: string;
    largo: number;
  }> = new Array<{
    nombre: string;
    largo: number;
  }>();
  public get g_categorias(): Array<{
    nombre: string;
    largo: number;
  }> {
    return this._g_categorias;
  }
  public set g_categorias(value: Array<{
    nombre: string;
    largo: number;
  }>) {
    this._g_categorias = value;
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public restPerrosProvider: RestPerrosProvider) {
    
  }

  

  ionViewDidLoad() {
    //variable para almacenar las categorias
    let categorias = [];
    
    
    
    this.restPerrosProvider.CargarCategorias()
    .subscribe(
      (data)=>{ 
          //el array es un arreglo de arrays por lo tanto angular no lo puede leer directamente
          //tengo que recorrer el array de message y obtener los nombres de las categorias
          let arrcategorias = data["message"];
          
          //recorro las categorias
          //debo sacar el largo de cada categoria para saber si muestro sub categorias
          Object.keys(arrcategorias).forEach(function(key){
              //console.log(key);
              categorias.push({
                  "nombre":key,
                  "largo":arrcategorias[key].lenght
              });
          });

          //let jsonCategoria = JSON.stringify(categorias);
          this.g_categorias = categorias;
          console.log(categorias); 
      },
      (error)=>{ console.log(error); }
    )
    console.log('ionViewDidLoad MainperrosPage');
  }

}
