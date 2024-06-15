import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangesPageComponent } from './exchanges-page.component';

describe('ExchangesPageComponent', () => {
  let component: ExchangesPageComponent;
  let fixture: ComponentFixture<ExchangesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExchangesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExchangesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
