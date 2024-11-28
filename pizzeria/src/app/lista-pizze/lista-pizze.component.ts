import { Component } from '@angular/core';
import { dummyPizzas } from './DUMMY_PIZZAS';
import { Pizza, PizzaComponent } from './pizza/pizza.component';

@Component({
  selector: 'app-lista-pizze',
  standalone: true,
  imports: [PizzaComponent],
  templateUrl: './lista-pizze.component.html',
  styleUrl: './lista-pizze.component.css'
})
export class ListaPizzeComponent {
  listaPizze: Pizza[] = dummyPizzas;
}
