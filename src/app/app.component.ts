import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatButtonModule, MatIconModule, CommonModule]
})
export class AppComponent {
  title = 'meu-projeto';

  constructor(private router: Router) {}

  voltar() {
    window.history.back();
  }

  podeVoltar(): boolean {
    return this.router.url !== '/list';
  }
}
