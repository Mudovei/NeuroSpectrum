import { Component, signal } from '@angular/core';
import { TelaLogin } from './tela-login/tela-login';
import { EsqueciSenha } from './esqueci-senha/esqueci-senha';

@Component({
  standalone: true,
  imports: [TelaLogin, EsqueciSenha],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Projeto-NeuroSpectrum');
}
