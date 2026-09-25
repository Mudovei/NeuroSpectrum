import { Component, signal } from '@angular/core';
import { TelaLogin } from './tela-login/tela-login';

@Component({
  standalone: true,
  imports: [TelaLogin],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Projeto-NeuroSpectrum');
}
