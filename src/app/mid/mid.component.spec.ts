import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidComponent } from './mid.component';

describe('MidComponent', () => {
  let component: MidComponent;
  let fixture: ComponentFixture<MidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MidComponent]
    });
    fixture = TestBed.createComponent(MidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
