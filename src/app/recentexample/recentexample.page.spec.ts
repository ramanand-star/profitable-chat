import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecentexamplePage } from './recentexample.page';

describe('RecentexamplePage', () => {
  let component: RecentexamplePage;
  let fixture: ComponentFixture<RecentexamplePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecentexamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
