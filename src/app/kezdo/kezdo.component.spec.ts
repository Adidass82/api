import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KezdoComponent } from './kezdo.component';

describe('KezdoComponent', () => {
  let component: KezdoComponent;
  let fixture: ComponentFixture<KezdoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KezdoComponent]
    });
    fixture = TestBed.createComponent(KezdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
