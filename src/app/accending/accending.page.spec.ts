import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccendingPage } from './accending.page';

describe('AccendingPage', () => {
  let component: AccendingPage;
  let fixture: ComponentFixture<AccendingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AccendingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
