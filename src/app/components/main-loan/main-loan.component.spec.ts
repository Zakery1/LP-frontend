import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLoanComponent } from './main-loan.component';

describe('MainLoanComponent', () => {
  let component: MainLoanComponent;
  let fixture: ComponentFixture<MainLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
