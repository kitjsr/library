import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryService } from '../../../services/category.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FontAwesomeModule,NgbAlertModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  reg:FormGroup=new FormGroup({
    name:new FormControl<String>(''),
  });
  submitted=false;
  isSuccess=false;
  alertType="success";
  alertClosed=false;
  publisher={
    name:"",
  };
  constructor(private formBuilder:FormBuilder , private categoryService:CategoryService){}
  ngOnInit(){
    this.reg=this.formBuilder.group({
      name:['',Validators.required],
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
    this.categoryService.create(this.reg.value).subscribe(reg=>{
      console.log("Successfully added")
      this.isSuccess=true;
      this.reg.reset()
      this.submitted=false;
    })
    console.log(JSON.stringify(this.reg.value,null,2));
  }

}
