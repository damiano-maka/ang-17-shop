import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavbarComponent],
  template: `
   <app-navbar />

   <div class="max-w-screen-md mx-auto">
    <router-outlet></router-outlet>
   </div>

  `,
  styles: [],
})
export class AppComponent {
  title = 'depedency-injection';
}
