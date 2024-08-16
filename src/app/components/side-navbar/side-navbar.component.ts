import { Component, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClickEventArgs, NodeSelectEventArgs, SidebarModule, ToolbarModule, TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';import { ListViewComponent, SelectEventArgs, ListViewModule } from '@syncfusion/ej2-angular-lists';


@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [BrowserModule,SidebarModule,ToolbarModule,TreeViewModule,ListViewModule],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.css'
})
export class SideNavbarComponent {
  
 
}

