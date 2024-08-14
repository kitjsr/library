import { Component, NgModule, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { PublisherService } from '../../services/publisher.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Table, TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-table1',
  standalone: true,
  imports: [RouterLink,RouterOutlet,FontAwesomeModule,TableModule,DropdownModule,InputTextModule,CommonModule,ButtonModule,FontAwesomeModule],
  templateUrl: './table1.component.html',
  styleUrl: './table1.component.css'
})
export class Table1Component implements OnInit{

  publishers:any;
  faEye = faEye;
  faPencil = faPencil;
  faTrash = faTrash;
  loading: boolean = true;
  searchValue: string | undefined;
  selectedPublisher:any;
  constructor(private publisherService:PublisherService){}
  ngOnInit() {
    this.publisherService.getAll().subscribe(res=>{
      console.log(res)
      this.publishers=res
      this.loading=false;
      this.publishers.forEach((publisher: { date: any; })=>(publisher.date=new Date(<Date>publisher.date)));
    });
    
  }
  delete(id:any){
    if(confirm("Are you sure")){
      this.publisherService.delete(id).subscribe(res=>{
        console.log(res)
        // this.publishers=res;
        
      console.log(id+"deleted")
      window.location.reload()
      })
    }
    }
  
  

  clear(table: Table) {
    table.clear();
    this.searchValue = ''
}
  onEdit(event:any) {
    if (!this.isPositiveInteger(event.target.value)) {
        event.stopPropagation();
    }
}


isPositiveInteger(val:any) {
  let str = String(val);

  str = str.trim();

  if (!str) {
      return false;
  }

  str = str.replace(/^0+/, '') || '0';
  var n = Math.floor(Number(str));

  return n !== Infinity && String(n) === str && n >= 0;
}
}
