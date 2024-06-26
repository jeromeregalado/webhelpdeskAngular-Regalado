import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWatcherComponent } from './add-watcher.component';

describe('AddWatcherComponent', () => {
  let component: AddWatcherComponent;
  let fixture: ComponentFixture<AddWatcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddWatcherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddWatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
