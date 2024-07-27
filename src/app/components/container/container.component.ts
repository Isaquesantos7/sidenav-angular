import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [ 
    NgClass,
    RouterOutlet
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})

export class ContainerComponent {
  @Input() collapsed: boolean = false;
  @Input() screeWidth: number = 0;

  /* Retornando classe de acordo o tamanho da largula da tela */
  public getBodyClass(): string {
    let styleClass: string = '';

    if (this.collapsed && this.screeWidth > 768) {

      styleClass = 'body-trimmed';
    } else if (this.collapsed && this.screeWidth <= 768 && this.screeWidth > 0) {
      
      styleClass = 'body-md-screen';
    }

    return styleClass;
  }
}
