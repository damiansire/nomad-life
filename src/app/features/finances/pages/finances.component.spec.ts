import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancesComponent } from './finances.component';

describe('FinancesComponent', () => {
  let component: FinancesComponent;
  let fixture: ComponentFixture<FinancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
