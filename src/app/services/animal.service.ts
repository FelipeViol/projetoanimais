import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private readonly STORAGE_KEY = 'animais';

  constructor() {}

  listarAnimais(): any[] {
    const dados = localStorage.getItem(this.STORAGE_KEY);
    return dados ? JSON.parse(dados) : [];
  }

  adicionarAnimal(animal: any): void {
    const animais = this.listarAnimais();
    animais.push(animal);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(animais));
  }

  removerAnimal(id: number): void {
    const animais = this.listarAnimais().filter(animal => animal.id !== id);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(animais));
  }

  atualizarAnimal(animalAtualizado: any): void {
    const animais = this.listarAnimais().map(animal =>
      animal.id === animalAtualizado.id ? animalAtualizado : animal
    );
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(animais));
  }
}
