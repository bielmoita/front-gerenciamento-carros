import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carro } from '../model/Carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(private http: HttpClient) { }


  /*
  CRUD: Create(post), Read(get), Update(put) e Delete(delete).
  */
//Create
getAllCarros(){
    return this.http.get('http://localhost:8080/')
  }
//READ

  postCarro(carro: Carro) {
    return this.http.post('http://localhost:8080/', carro)
  }

  // Update
  putCarro(carro: Carro, id:number){
    return this.http.put(`http://localhost:8080/${id}`, carro)
  }

  getByIdCarro(id:number){
    return this.http.get(`http://localhost:8080/${id}`)
  }

  //DELETE
  deletePostagem(id:number){
    return this.http.delete(`http://localhost:8080/${id}`)
  }

}
