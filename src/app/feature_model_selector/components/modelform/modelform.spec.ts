import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modelform } from './modelform';

describe('Modelform', () => {
  let component: Modelform;
  let fixture: ComponentFixture<Modelform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modelform],
    }).compileComponents();

    fixture = TestBed.createComponent(Modelform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
