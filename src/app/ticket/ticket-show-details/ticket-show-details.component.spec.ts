import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketShowDetailsComponent } from './ticket-show-details.component';

describe('TicketShowDetailsComponent', () => {
  let component: TicketShowDetailsComponent;
  let fixture: ComponentFixture<TicketShowDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketShowDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TicketShowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
