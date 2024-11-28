import { Component, EventEmitter, Output } from '@angular/core';
import { dummyPizzas } from './pizza/DUMMY_PIZZAS';
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
  @Output() pizzaSelected = new EventEmitter<any>();

  selectPizza(pizza: any): void {
    this.pizzaSelected.emit(pizza); // Emit the selected pizza to the parent
  }
}
