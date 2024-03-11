import { Component, OnInit } from '@angular/core';
import { Carro } from '../model/Carro';
import { CarroService } from '../service/carro-service.service';

@Component({
  selector: 'app-gerenciamento',
  templateUrl: './gerenciamento.component.html',
  styleUrls: ['./gerenciamento.component.css']
})
export class GerenciamentoComponent implements OnInit {

  listaCarros: Carro[];
  carro: Carro = new Carro;
  alerta:boolean = false;
  nome:string;
  id:number

  constructor(private carroService: CarroService){ }

  ngOnInit(): void {
    this.findAllCarros;

  }

  findAllCarros(){
    this.carroService.getAllCarros().subscribe(resp: Carro[])=>{
      this.listaCarros = resp;
    }
  }

  cadastrarCarro(){
    this.carroService.postCarro(this.carro).subscribe(resp: Carro)=>{
      this.carro = resp;
      location.assign('/gerenciamento')

    }
  }

  pesquisarById(){
    this.carroService.getByIdCarro(this.id).subscribe(resp: Carro)=>{
      this.carro = resp;
      location.assign('/gerenciamento');
    }
  }



}
