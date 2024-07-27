import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faL, faHome, faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    RouterLink,
    FontAwesomeModule,
    NgIf,
    NgClass,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})

export class SidenavComponent {
  protected collapsed: boolean = false;

  protected fal = faL;
  protected faHome = faHome;
  protected faClose = faClose;

  public toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }

  public closeSidenav(): void {
    this.collapsed = false;
  }
}
