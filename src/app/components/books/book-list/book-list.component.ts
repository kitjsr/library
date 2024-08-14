import { Component } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [RouterLink,RouterOutlet,FontAwesomeModule,TableModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books:any
  faEye = faEye;
  faPencil = faPencil;
  faTrash = faTrash;
  constructor(private bookService:BookService){}
  ngOnInit(){
    this.bookService.getAll()
    .subscribe(res=>{
      console.log(res)
      console.log("hi hello")

      this.books=res
    })
  }

  delete(id:any){
    if(confirm("Are you sure")){
      this.bookService.delete(id).subscribe(res=>{
        console.log(res)
        // this.publishers=res;
        
      console.log(id+"deleted")
      window.location.reload()
      })
    }
    }



}