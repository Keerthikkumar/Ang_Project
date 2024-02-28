import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTPCLNTRequestComponent } from './htp-clnt-request.component';

describe('HTPCLNTRequestComponent', () => {
  let component: HTPCLNTRequestComponent;
  let fixture: ComponentFixture<HTPCLNTRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HTPCLNTRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HTPCLNTRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
