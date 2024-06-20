import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { DrinksComponent } from './pages/drinks/drinks.component';
import { PartnersComponent } from './pages/partners/partners.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Azuro',
    component: HomeComponent,
  },
  {
    path: 'over-ons',
    title: 'Over Azuro',
    component: AboutComponent,
  },
  {
    path: 'kalender',
    title: 'Kalender',
    component: CalendarComponent,
  },
  {
    path: 'menukaart',
    title: 'Menukaart',
    component: DrinksComponent,
  },
  {
    path: 'partners',
    title: 'Partners',
    component: PartnersComponent,
  },
];
