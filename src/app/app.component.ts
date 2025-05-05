import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <h4>Work in progress</h4>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'application-front';
}
