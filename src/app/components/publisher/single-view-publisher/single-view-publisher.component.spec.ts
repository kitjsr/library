import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleViewPublisherComponent } from './single-view-publisher.component';

describe('SingleViewPublisherComponent', () => {
  let component: SingleViewPublisherComponent;
  let fixture: ComponentFixture<SingleViewPublisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleViewPublisherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleViewPublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
