import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactanglePage } from './reactangle.page';

describe('ReactanglePage', () => {
  let component: ReactanglePage;
  let fixture: ComponentFixture<ReactanglePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReactanglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
