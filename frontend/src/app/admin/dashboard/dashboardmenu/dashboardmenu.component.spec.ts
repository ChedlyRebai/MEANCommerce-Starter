import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardmenuComponent } from './dashboardmenu.component';

describe('DashboardmenuComponent', () => {
  let component: DashboardmenuComponent;
  let fixture: ComponentFixture<DashboardmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
