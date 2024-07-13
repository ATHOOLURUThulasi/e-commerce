import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmodelgroupComponent } from './ngmodelgroup.component';

describe('NgmodelgroupComponent', () => {
  let component: NgmodelgroupComponent;
  let fixture: ComponentFixture<NgmodelgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgmodelgroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgmodelgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
