import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductitemComponent } from './productitem.component';

describe('ProductitemComponent', () => {
  let component: ProductitemComponent;
  let fixture: ComponentFixture<ProductitemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductitemComponent]
    });
    fixture = TestBed.createComponent(ProductitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
