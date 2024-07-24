import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  reg:FormGroup=new FormGroup({
    name:new FormControl<String>(''),
    mobile:new FormControl<String>(''),
    email:new FormControl<String>(''),
  });
  submitted=false;
  publisher={
    name:"",
    mobile:"",
    email:"",
  };
  constructor(private formBuilder:FormBuilder){}
  ngOnInit(){
    this.reg=this.formBuilder.group({
      name:['',Validators.required],
      mobile: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern("^[0-9]*$")
        ],
      ],
      email:['',[Validators.required,Validators.email,]],
     
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
    console.log(JSON.stringify(this.reg.value,null,2));
  }

}
