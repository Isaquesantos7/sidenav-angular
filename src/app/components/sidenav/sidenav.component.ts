import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faL, 
  faHome, 
  faClose,
} from '@fortawesome/free-solid-svg-icons';

import { SideNavToggle } from '../../interfaces/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { animate, keyframes, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FontAwesomeModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    NgIf,
    NgClass,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms', style({opacity: 1}))
      ]),

      transition(':leave', [
        style({opacity: 1}),
        animate('350ms', style({opacity: 0}))
      ]),
    ]),

    trigger('ratate', [
      transition(':enter', [
        animate('1000ms', keyframes([
          style({transform: 'rotate(0deg)', offset: '0'}),
          style({transform: 'rotate(2turn)', offset: '1'}),
        ]))
      ])
    ])
  ]
})

export class SidenavComponent implements OnInit{
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  protected collapsed: boolean = false;
  protected screenWidth: number = 0;

  protected fal = faL;
  protected faHome = faHome;
  protected faClose = faClose;

  /* Reajustando a janela, fechando o sidenav e atribuindo z-index de acordo a largura da janela */
  @HostListener('window:resize', ['$event'])
  public onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  ngOnInit(): void {
    /* O atributo screenWidth recebendo a largura da janela */
    this.screenWidth = window.innerWidth;
  }

  public toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  public closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
}
