import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartPatternsPage } from './chart-patterns.page';

describe('ChartPatternsPage', () => {
  let component: ChartPatternsPage;
  let fixture: ComponentFixture<ChartPatternsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChartPatternsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
