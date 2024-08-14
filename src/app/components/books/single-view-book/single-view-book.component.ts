import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../../services/book.service';
import { CategoryService } from '../../../services/category.service';
import { PublisherService } from '../../../services/publisher.service';

@Component({
  selector: 'app-single-view-book',
  standalone: true,
  imports: [],
  templateUrl: './single-view-book.component.html',
  styleUrl: './single-view-book.component.css'
})
export class SingleViewBookComponent {
  book:any
  constructor(private route:ActivatedRoute,private bookService:BookService,private categoryService:CategoryService,
    private publisherService:PublisherService){}
  ngOnInit(){
    const id=this.route.snapshot.params['id'];
    console.log(id);
    // this.publisherService.get(id).subscribe()
    this.bookService.get(id).subscribe(res=>{
      console.log(res)
      this.book=res;
      console.log(id+"fetched")
    })
  }


}
