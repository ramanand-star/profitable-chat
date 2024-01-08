import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BullishPage } from './bullish.page';

describe('BullishPage', () => {
  let component: BullishPage;
  let fixture: ComponentFixture<BullishPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BullishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
