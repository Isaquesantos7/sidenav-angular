import { Component } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [ 
    FontAwesomeModule
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})

export class ContainerComponent {
  faCoffee = faCoffee;
}
