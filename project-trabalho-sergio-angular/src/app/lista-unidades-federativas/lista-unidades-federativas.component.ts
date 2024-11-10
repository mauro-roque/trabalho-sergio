import { Component, OnInit } from '@angular/core';
import { UnidadeFederativaService } from '../unidade-federativa.service';

@Component({
  selector: 'app-lista-unidades-federativas',
  templateUrl: './lista-unidades-federativas.component.html',
  styleUrls: ['./lista-unidades-federativas.component.css']
})
export class ListaUnidadesFederativasComponent implements OnInit {
  unidadesFederativas: any[] = [];

  constructor(private unidadeFederativaService: UnidadeFederativaService) { }

  ngOnInit(): void {
    this.unidadeFederativaService.listarUnidadesFederativas().subscribe(data => {
      this.unidadesFederativas = data;
    });
  }
}
