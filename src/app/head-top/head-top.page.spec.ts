import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeadTopPage } from './head-top.page';

describe('HeadTopPage', () => {
  let component: HeadTopPage;
  let fixture: ComponentFixture<HeadTopPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HeadTopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
