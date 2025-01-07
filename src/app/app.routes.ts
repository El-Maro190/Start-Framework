import { AboutComponent } from './about/about.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'about',component: AboutComponent },
  {
    path: 'portfolio', component: PortfolioComponent
   },
  { path: 'contact',component:ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
