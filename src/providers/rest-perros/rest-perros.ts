import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
/*
  Generated class for the RestPerrosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.


  Nuevo recurso para consumir el servicio REST  de PERROS

*/
@Injectable()
export class RestPerrosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestPerrosProvider Provider');
  }

  //Cargar Categorias de razas desde el servicio REST
  CargarCategorias(){
    var api_url = "https://dog.ceo/api/breeds/list/all";
    return this.http.get(api_url);
  }

}
