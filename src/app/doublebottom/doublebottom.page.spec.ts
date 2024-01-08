import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoublebottomPage } from './doublebottom.page';

describe('DoublebottomPage', () => {
  let component: DoublebottomPage;
  let fixture: ComponentFixture<DoublebottomPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DoublebottomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
