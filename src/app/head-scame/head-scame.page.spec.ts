import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeadScamePage } from './head-scame.page';

describe('HeadScamePage', () => {
  let component: HeadScamePage;
  let fixture: ComponentFixture<HeadScamePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HeadScamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
