import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatepracticeComponent } from './templatepractice.component';

describe('TemplatepracticeComponent', () => {
  let component: TemplatepracticeComponent;
  let fixture: ComponentFixture<TemplatepracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplatepracticeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplatepracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
