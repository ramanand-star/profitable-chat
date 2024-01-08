import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactangleTopPage } from './reactangle-top.page';

describe('ReactangleTopPage', () => {
  let component: ReactangleTopPage;
  let fixture: ComponentFixture<ReactangleTopPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReactangleTopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
