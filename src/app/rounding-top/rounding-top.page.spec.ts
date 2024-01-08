import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoundingTopPage } from './rounding-top.page';

describe('RoundingTopPage', () => {
  let component: RoundingTopPage;
  let fixture: ComponentFixture<RoundingTopPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RoundingTopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
