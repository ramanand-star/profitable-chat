import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetMorePage } from './get-more.page';

describe('GetMorePage', () => {
  let component: GetMorePage;
  let fixture: ComponentFixture<GetMorePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GetMorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
