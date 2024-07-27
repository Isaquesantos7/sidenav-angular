import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faL, faHome, faClose } from '@fortawesome/free-solid-svg-icons';
import { SideNavToggle } from '../../interfaces/sidenav';

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
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  protected collapsed: boolean = false;
  protected screenWidth: number = 0;

  protected fal = faL;
  protected faHome = faHome;
  protected faClose = faClose;

  public toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  public closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
}
