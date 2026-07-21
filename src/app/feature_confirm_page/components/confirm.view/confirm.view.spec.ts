import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmView } from './confirm.view';

describe('ConfirmView', () => {
  let component: ConfirmView;
  let fixture: ComponentFixture<ConfirmView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmView],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
