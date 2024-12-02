import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Responsabile } from './responsabile.model';

@Component({
  selector: 'app-responsabili',
  standalone: true,
  imports: [],
  templateUrl: './responsabili.component.html',
  styleUrl: './responsabili.component.css'
})
export class ResponsabiliComponent {
  @Input({required: true}) respo!: Responsabile;
  //il mio event emitter dovra passare una stringa
  @Output() disponibilita = new EventEmitter<string>();

  onMostraDispo(nCorsi : number) {
    let stringaDisponibilita : string = '';
    if (nCorsi < 3) {
      stringaDisponibilita = 'Hai ancora disponibilita';
    } else {
      stringaDisponibilita = 'Non hai piu disponibilita';
    }
    console.log(stringaDisponibilita);
    this.disponibilita.emit(stringaDisponibilita);
  }
}
