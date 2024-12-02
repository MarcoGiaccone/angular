import { Component, computed, signal } from '@angular/core';
import { RESPO_DB } from '../RESPO_DB';

const randomIndex = Math.floor(Math.random() * RESPO_DB.length);
@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {
//un signal e' un oggetto wrapper nel quale registro un valore di qualsisasi tipo, so che  questo valore potra cambiare. Al change di questo valore Angular viene notificato che questo succede e quindi e' in grado di aggiornare la parte specifica

//Signals are TRACKABLE DATA CONTAINERS
//quando wrappo qualcosa con signal, quel qualcosa cambiera', viene tenuto in osservazione
  selectedRespo = signal(RESPO_DB[randomIndex]);

  onSelectRespo() {
    const randomIndex = Math.floor(Math.random() * RESPO_DB.length);
    this.selectedRespo.set(RESPO_DB[randomIndex]);
  }

  imagePath = computed(() => {
    return this.selectedRespo().image;
  })
}
