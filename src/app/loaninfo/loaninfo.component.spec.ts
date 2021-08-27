import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaninfoComponent } from './loaninfo.component';

describe('LoaninfoComponent', () => {
  let component: LoaninfoComponent;
  let fixture: ComponentFixture<LoaninfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaninfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaninfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
