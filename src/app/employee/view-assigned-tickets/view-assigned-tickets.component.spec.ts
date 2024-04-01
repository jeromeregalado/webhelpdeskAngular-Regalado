import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssignedTicketsComponent } from './view-assigned-tickets.component';

describe('ViewAssignedTicketsComponent', () => {
  let component: ViewAssignedTicketsComponent;
  let fixture: ComponentFixture<ViewAssignedTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAssignedTicketsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAssignedTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
