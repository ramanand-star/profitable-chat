import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoundingBottomPage } from './rounding-bottom.page';

describe('RoundingBottomPage', () => {
  let component: RoundingBottomPage;
  let fixture: ComponentFixture<RoundingBottomPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RoundingBottomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
