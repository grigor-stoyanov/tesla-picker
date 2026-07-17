import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarImg } from './car-img';

describe('CarImg', () => {
  let component: CarImg;
  let fixture: ComponentFixture<CarImg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarImg],
    }).compileComponents();

    fixture = TestBed.createComponent(CarImg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
