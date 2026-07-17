import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPageLayout } from './config-page-layout';

describe('ConfigPageLayout', () => {
  let component: ConfigPageLayout;
  let fixture: ComponentFixture<ConfigPageLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigPageLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigPageLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
