import { Component } from '@angular/core';
import { ResponsabiliComponent } from './responsabili/responsabili.component';
import { Responsabile } from './responsabili/responsabile.model';
import { RESPO_DB } from './RESPO_DB';
import { CorsoComponent } from './corsi/corso/corso.component';

@Component({
  selector: 'app-lez4-statement',
  standalone: true,
  imports: [ResponsabiliComponent, CorsoComponent],
  templateUrl: './lez4-statement.component.html',
  styleUrl: './lez4-statement.component.css'
})
export class Lez4StatementComponent {
  listaStudenti: string[] = [
    "Paola Verdi",
    "Luca Rossi",
    "Marco Gialli",
    "Gino Gini"
  ]

  listaDocenti: {
    id: string,
    nome: string,
    disponibilita: boolean,
  } [] = [
      {
        id: "1",
        nome: "Dario Mennillo",
        disponibilita: true
      },
      {
        id: "2",
        nome: "Mauro Bogliaccino",
        disponibilita: true
      },
      {
        id: "3",
        nome: "Pippo Baudo",
        disponibilita: false
      }
  ]

  listaMaterie : string[] = ["Angular", "JavaScript" , "PHP", "Database"];

  listaRespoCorso: Responsabile[] = RESPO_DB;

  respoDisponibilita!: string;

  isClosed: boolean = false;
  onMostraDisponibilita(disponibilita : string) {
    this.respoDisponibilita = disponibilita;
    this.isClosed = false;
  }
  onIsClosed(isClosed: boolean) {
    this.isClosed = true;
  }
}
