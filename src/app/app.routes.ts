import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'sideNavbar',component:SideNavbarComponent},
    {path:'**',component:HomeComponent},
];
