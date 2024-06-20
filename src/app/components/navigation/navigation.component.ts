import { Component } from '@angular/core';
import { Router, Route, RouterLink } from '@angular/router';
import { inject } from '@angular/core';
import { LogoVerticalComponent } from '../atoms/logo-vertical/logo-vertical.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, LogoVerticalComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  private router = inject(Router);
  navRoutes: Route[] = this.router.config;
}
