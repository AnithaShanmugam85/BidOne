import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeNameListComponent } from './employee-name-list.component';

describe('EmployeeNameListComponent', () => {
  let component: EmployeeNameListComponent;
  let fixture: ComponentFixture<EmployeeNameListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeNameListComponent]
    });
    fixture = TestBed.createComponent(EmployeeNameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
