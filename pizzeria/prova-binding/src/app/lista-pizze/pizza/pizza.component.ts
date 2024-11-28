import { Component, Input } from '@angular/core';

export interface Pizza {
  id: number;
  nome: string;
  ingredienti: string[];
  prezzo: number;
}

@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.css'
})
export class PizzaComponent {
  @Input() pizza!: Pizza;
}
