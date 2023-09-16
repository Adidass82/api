import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KepekComponent } from './kepek.component';

describe('KepekComponent', () => {
  let component: KepekComponent;
  let fixture: ComponentFixture<KepekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KepekComponent]
    });
    fixture = TestBed.createComponent(KepekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
