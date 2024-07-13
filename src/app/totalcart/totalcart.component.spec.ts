import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalcartComponent } from './totalcart.component';

describe('TotalcartComponent', () => {
  let component: TotalcartComponent;
  let fixture: ComponentFixture<TotalcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalcartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotalcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
