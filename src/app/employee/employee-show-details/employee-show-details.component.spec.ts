import { EmployeeShowDetailsComponent } from './employee-show-details.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('ShowDetailsComponent', () => {
  let component: EmployeeShowDetailsComponent;
  let fixture: ComponentFixture<EmployeeShowDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeShowDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeShowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
