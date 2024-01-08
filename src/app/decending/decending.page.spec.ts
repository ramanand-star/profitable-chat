import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DecendingPage } from './decending.page';

describe('DecendingPage', () => {
  let component: DecendingPage;
  let fixture: ComponentFixture<DecendingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DecendingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
