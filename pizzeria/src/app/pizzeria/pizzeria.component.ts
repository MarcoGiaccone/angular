import { Component, Input, Output } from '@angular/core';
import { ListaPizzeComponent } from './lista-pizze/lista-pizze.component';
import { DisplayComponent } from './display/display.component';
import { Pizza } from './lista-pizze/pizza/pizza.component';

@Component({
  selector: 'app-pizzeria',
  standalone: true,
  imports: [ListaPizzeComponent, DisplayComponent],
  templateUrl: './pizzeria.component.html',
  styleUrl: './pizzeria.component.css'
})
export class PizzeriaComponent {
  nome: string = "Bella ITS";
  indirizzo: string = "Via Jacopo Durandi 10";
  selectedPizza: any = null;

  onPizzaSelected(pizza: any): void {
    this.selectedPizza = pizza;
  }
}
