import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildINComponent } from './child-in.component';

describe('ChildINComponent', () => {
  let component: ChildINComponent;
  let fixture: ComponentFixture<ChildINComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildINComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
