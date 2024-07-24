import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgbCollapseModule,RouterLink,RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  name = 'Angular';
  public isCollapsed = true;

}
