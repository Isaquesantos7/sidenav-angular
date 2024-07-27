import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SideNavToggle } from './interfaces/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ContainerComponent,
    SidenavComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'sidenav';

  protected isSideNavCollapsed: boolean = false;
  protected screenWidth: number = 0;

  public onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
