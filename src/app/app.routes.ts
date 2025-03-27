import { Routes } from '@angular/router';
import { ListagemComponent } from './components/listagem/listagem.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';

export const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListagemComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: '**', redirectTo: '/list' }
];
