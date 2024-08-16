import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { AboutComponent } from './components/about/about.component';
import { StudentPanelComponent } from './components/student-panel/student-panel.component';
import { LibrarianPanelComponent } from './components/librarian-panel/librarian-panel.component';
import { AddPublisherComponent } from './components/publisher/add-publisher/add-publisher.component';
import { PublishersComponent } from './components/publisher/publishers/publishers.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { CategoriesComponent } from './components/category/categories/categories.component';
import { AddBookComponent } from './components/books/add-book/add-book.component';
import { BookListComponent } from './components/books/book-list/book-list.component';
import { SingleViewPublisherComponent } from './components/publisher/single-view-publisher/single-view-publisher.component';
import { SingleViewBookComponent } from './components/books/single-view-book/single-view-book.component';
import { EditPublisherComponent } from './components/publisher/edit-publisher/edit-publisher.component';
import { EditBookComponent } from './components/books/edit-book/edit-book.component';
import { Table1Component } from './components/table1/table1.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'sidNavbar',component:SideNavbarComponent},
    {path:'about',component:AboutComponent},
    {path:'studentPanel',component:StudentPanelComponent},
    {path:'librarianPanel',component:LibrarianPanelComponent},
    {path:'addPublisher',component:AddPublisherComponent},
    {path:'publishers',component:PublishersComponent},
    {path:'singleViewPublisher/:id',component:SingleViewPublisherComponent},
    {path:'editPublisher/:id',component:EditPublisherComponent},
    {path:'addCategory',component:AddCategoryComponent},
    {path:'categories',component:CategoriesComponent},
    {path:'addBook',component:AddBookComponent},
    {path:'bookList',component:BookListComponent},
    {path:'singleViewBook/:id',component:SingleViewBookComponent},
    {path:'editBook/:id',component:EditBookComponent},
    {path:'table1',component:Table1Component},
    {path:'**',component:HomeComponent},
];
