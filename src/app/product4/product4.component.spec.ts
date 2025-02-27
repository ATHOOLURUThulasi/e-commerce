import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product4Component } from './product4.component';

describe('Product4Component', () => {
  let component: Product4Component;
  let fixture: ComponentFixture<Product4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Product4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Product4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
