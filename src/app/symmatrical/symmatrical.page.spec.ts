import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SymmatricalPage } from './symmatrical.page';

describe('SymmatricalPage', () => {
  let component: SymmatricalPage;
  let fixture: ComponentFixture<SymmatricalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SymmatricalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
