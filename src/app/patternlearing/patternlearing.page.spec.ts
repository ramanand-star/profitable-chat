import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatternlearingPage } from './patternlearing.page';

describe('PatternlearingPage', () => {
  let component: PatternlearingPage;
  let fixture: ComponentFixture<PatternlearingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PatternlearingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
