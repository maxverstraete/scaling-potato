import { Component } from '@angular/core';
import { LogoComponent } from '../atoms/logo/logo.component';
import { HamburgerComponent } from '../atoms/hamburger/hamburger.component';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, HamburgerComponent, NavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
