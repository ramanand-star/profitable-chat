import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CradlePage } from './cradle.page';

describe('CradlePage', () => {
  let component: CradlePage;
  let fixture: ComponentFixture<CradlePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CradlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
