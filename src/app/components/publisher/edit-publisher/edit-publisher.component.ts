import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { PublisherService } from '../../../services/publisher.service';

@Component({
  selector: 'app-edit-publisher',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,NgbAlertModule],
  templateUrl: './edit-publisher.component.html',
  styleUrl: './edit-publisher.component.css'
})
export class EditPublisherComponent {
  reg:FormGroup=new FormGroup({
    name:new FormControl<String>(''),
    mobile:new FormControl<String>(''),
    email:new FormControl<String>(''),
    address:new FormControl<String>(''),
  });
  submitted=false;
  isSuccess=false;
  alertType="success";
  alertClosed=false;
  pid:String="";

  publisher={
    name:"",
    mobile:"",
    email:"",
    address:"",
  };
  constructor(private formBuilder:FormBuilder,private route:ActivatedRoute,private publisherService:PublisherService){}
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
      address:['',Validators.required],
    })

    const id=this.route.snapshot.params['id'];
    this.pid=id;
    console.log(id)
    this.publisherService.get(id)
    .subscribe(res=>{
      console.log(res)
      this.publisher=res
      this.reg.patchValue(res)
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

    this.publisherService.update(this.pid,this.reg.value)
    .subscribe(reg=>{
      console.log("Successfully updated")
      this.isSuccess=true;
      this.reg.reset();
      this.submitted=false;
    })
    console.log(JSON.stringify(this.reg.value,null,2));
  }




}
