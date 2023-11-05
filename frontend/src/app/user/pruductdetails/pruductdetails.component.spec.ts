import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruductdetailsComponent } from './pruductdetails.component';

describe('PruductdetailsComponent', () => {
  let component: PruductdetailsComponent;
  let fixture: ComponentFixture<PruductdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruductdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruductdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
