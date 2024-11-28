import { Component } from '@angular/core';
import { ListaPizzeComponent } from './lista-pizze/lista-pizze.component';

@Component({
  selector: 'app-pizzeria',
  standalone: true,
  imports: [ListaPizzeComponent],
  templateUrl: './pizzeria.component.html',
  styleUrl: './pizzeria.component.css'
})
export class PizzeriaComponent {
  nome: string = "Bella ITS";
  indirizzo: string = "Via Jacopo Durandi 10";
}
