import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    RouterModule
  ]
})
export class ListagemComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'especie', 'raca', 'idade', 'porte', 'sexo', 'castrado', 'acoes'];
  dataSource: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(): void {
    const dados = localStorage.getItem('animais');
    if (dados) {
      this.dataSource = JSON.parse(dados);
    }
  }

  getStatusColor(castrado: boolean): string {
    return castrado ? 'primary' : 'warn';
  }

  getStatusText(castrado: boolean): string {
    return castrado ? 'Castrado' : 'Não Castrado';
  }
}
