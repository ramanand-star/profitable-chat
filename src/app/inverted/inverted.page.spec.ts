import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvertedPage } from './inverted.page';

describe('InvertedPage', () => {
  let component: InvertedPage;
  let fixture: ComponentFixture<InvertedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InvertedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
