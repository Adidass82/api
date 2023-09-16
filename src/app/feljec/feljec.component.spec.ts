import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeljecComponent } from './feljec.component';

describe('FeljecComponent', () => {
  let component: FeljecComponent;
  let fixture: ComponentFixture<FeljecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeljecComponent]
    });
    fixture = TestBed.createComponent(FeljecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
