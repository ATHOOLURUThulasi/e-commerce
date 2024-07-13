import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticereactiveformsComponent } from './practicereactiveforms.component';

describe('PracticereactiveformsComponent', () => {
  let component: PracticereactiveformsComponent;
  let fixture: ComponentFixture<PracticereactiveformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PracticereactiveformsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticereactiveformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
