import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaPizzeComponent } from './lista-pizze/lista-pizze.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaPizzeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prova-binding';
}
