import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CupHandlePage } from './cup-handle.page';

describe('CupHandlePage', () => {
  let component: CupHandlePage;
  let fixture: ComponentFixture<CupHandlePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CupHandlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
