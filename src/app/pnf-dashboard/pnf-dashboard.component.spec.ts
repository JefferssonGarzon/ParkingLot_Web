import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnfDashboardComponent } from './pnf-dashboard.component';

describe('PnfDashboardComponent', () => {
  let component: PnfDashboardComponent;
  let fixture: ComponentFixture<PnfDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PnfDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PnfDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
