import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({requred: true}) nome!: string;   <--vacchio modo
  //se ho bisdogno del tipo lo passo tramite parentesi angolari
  //se ho bisogno che sia required metto '.required' dopo input (e' opzionale)
  nome = input.required<string>();
  cognome = input.required<string>();
  imageAvatar = input.required<string>();

  image = computed(() => {
    return '' + this.imageAvatar();
  })

  select = output<string>();

  onSelectRespo() {
    this.select.emit(this.nome());
  }
}
