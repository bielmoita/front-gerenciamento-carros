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

  constructor(private carroService: CarroService){ }

  ngOnInit(): void {

  }

  findAllCarros(){
    this.carroService.getAllCarros().subscribe(resp: Carro[])=>{
      this.listaCarros = resp;
    }
  }

}
