import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { AboutComponent } from './components/about/about.component';
import { StudentPanelComponent } from './components/student-panel/student-panel.component';
import { LibrarianPanelComponent } from './components/librarian-panel/librarian-panel.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'sideNavbar',component:SideNavbarComponent},
    {path:'about',component:AboutComponent},
    {path:'studentPanel',component:StudentPanelComponent},
    {path:'librarianPanel',component:LibrarianPanelComponent},
    {path:'**',component:HomeComponent},
];
