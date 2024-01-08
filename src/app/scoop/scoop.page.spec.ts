import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScoopPage } from './scoop.page';

describe('ScoopPage', () => {
  let component: ScoopPage;
  let fixture: ComponentFixture<ScoopPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ScoopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
