import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentINComponent } from './parent-in.component';

describe('ParentINComponent', () => {
  let component: ParentINComponent;
  let fixture: ComponentFixture<ParentINComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentINComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
