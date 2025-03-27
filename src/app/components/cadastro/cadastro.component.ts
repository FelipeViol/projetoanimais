import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class CadastroComponent implements OnInit {
  form: FormGroup;
  especies = ['Cachorro', 'Gato', 'Pássaro', 'Peixe', 'Outro'];
  portes = ['Pequeno', 'Médio', 'Grande'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      especie: ['', [Validators.required]],
      raca: ['', [Validators.required]],
      idade: ['', [Validators.required, Validators.min(0)]],
      dataNascimento: ['', [Validators.required]],
      porte: ['', [Validators.required]],
      peso: ['', [Validators.required, Validators.min(0)]],
      sexo: ['', [Validators.required]],
      castrado: [false],
      observacoes: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.valid) {
      const animal = this.form.value;
      // Aqui você pode adicionar a lógica para salvar no backend
      console.log('Dados do animal:', animal);

      // Adiciona à lista de animais
      const animais = JSON.parse(localStorage.getItem('animais') || '[]');
      animais.push({
        id: animais.length + 1,
        ...animal
      });
      localStorage.setItem('animais', JSON.stringify(animais));

      this.snackBar.open('Animal cadastrado com sucesso!', 'Fechar', {
        duration: 3000
      });
      this.router.navigate(['/list']);
    }
  }

  onCancel() {
    this.router.navigate(['/list']);
  }
}
