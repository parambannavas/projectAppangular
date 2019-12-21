import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestCollegeComponent } from './bestCollege.component';

describe('BestCollegeComponent', () => {
  let component: BestCollegeComponent;
  let fixture: ComponentFixture<BestCollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestCollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
