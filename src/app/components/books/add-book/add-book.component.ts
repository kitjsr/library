import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PublisherService } from '../../../services/publisher.service';
import { BookService } from '../../../services/book.service';
import { CategoryService } from '../../../services/category.service';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,NgbAlertModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  categories:any;
  publishers:any;
  reg:FormGroup=new FormGroup({
    isbn:new FormControl<String>(''),
    author:new FormControl<String>(''),
    title:new FormControl<String>(''),
    price:new FormControl<String>(''),
    edition:new FormControl<String>(''),
  });
  submitted=false;
  isSuccess=false;
  alertType="success"
  alertClosed=false
  book={
    isbn:"",
    author:"",
    title:"",
    price:"",
    edition:"",
    category:"",
    publisher:"",
  };
  constructor(private formBuilder:FormBuilder , private bookService:BookService ,private publisherService:PublisherService,private categoryService:CategoryService){}
  ngOnInit(){
    
    this.reg=this.formBuilder.group({
      isbn: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern("^[0-9]*$")
        ],
      ],
      author:['',Validators.required],
      title:['',Validators.required],
      price:['',Validators.required],
      edition:['',Validators.required],
      publisher:['',Validators.required],
      category:['',Validators.required],
    })

    this.categoryService.getAll().subscribe(data=>{
      console.log(data)
      this.categories=data
    })
    this.publisherService.getAll().subscribe(data=>{
      console.log(data)
      this.publishers=data
    })
  };
  get f():{[key:string]:AbstractControl}{
    return this.reg.controls;
  }
  onSubmit(){
    this.submitted=true;
    if(this.reg.invalid){
      return;
    }
    this.bookService.create(this.reg.value).subscribe(reg=>{
      console.log("Successfully added")
      this.isSuccess=true;
      this.reg.reset()
      this.submitted=false;
      
    })
    console.log(JSON.stringify(this.reg.value,null,2));
  }

}
