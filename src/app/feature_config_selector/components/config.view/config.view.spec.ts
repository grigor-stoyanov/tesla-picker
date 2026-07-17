import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigView } from './config.view';

describe('ConfigView', () => {
  let component: ConfigView;
  let fixture: ComponentFixture<ConfigView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigView],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
