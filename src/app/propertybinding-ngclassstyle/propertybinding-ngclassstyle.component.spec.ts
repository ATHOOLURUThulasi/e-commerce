import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertybindingNgclassstyleComponent } from './propertybinding-ngclassstyle.component';

describe('PropertybindingNgclassstyleComponent', () => {
  let component: PropertybindingNgclassstyleComponent;
  let fixture: ComponentFixture<PropertybindingNgclassstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertybindingNgclassstyleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropertybindingNgclassstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
