import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPageLayout } from './confirm-page-layout';

describe('ConfirmPageLayout', () => {
  let component: ConfirmPageLayout;
  let fixture: ComponentFixture<ConfirmPageLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmPageLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmPageLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
