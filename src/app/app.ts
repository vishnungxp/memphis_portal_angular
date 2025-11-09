import { Component } from '@angular/core';
import { NavigationMenu } from './components/navigation-menu/navigation-menu';
import { Dashboard } from './components/dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [NavigationMenu, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Memphis Portal';
}
