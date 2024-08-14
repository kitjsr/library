import { Component } from '@angular/core';
import { PublisherService } from '../../../services/publisher.service';
import { ActivatedRoute } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-single-view-publisher',
  standalone: true,
  imports: [CardModule,ButtonModule,TableModule],
  templateUrl: './single-view-publisher.component.html',
  styleUrl: './single-view-publisher.component.css'
})
export class SingleViewPublisherComponent {
  publisher:any
  constructor(private route:ActivatedRoute,private publisherService:PublisherService){}
  ngOnInit(){
    const id=this.route.snapshot.params['id'] 
    console.log(id)
    this.publisherService.get(id)
    .subscribe(res=>{
      console.log(res)
      this.publisher=res
    })
  }

}
