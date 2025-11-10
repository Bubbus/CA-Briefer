import { Component, signal } from '@angular/core';
import { AppTitle } from '../component/AppTitle/AppTitle';
import { AppBody } from '../component/AppBody/AppBody';

@Component({
  selector: 'app-root',
  imports: [AppTitle, AppBody],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CA-Briefer');
}
