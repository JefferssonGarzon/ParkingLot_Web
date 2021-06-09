import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingScreenComponent } from './starting-screen.component';

describe('StartingScreenComponent', () => {
  let component: StartingScreenComponent;
  let fixture: ComponentFixture<StartingScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartingScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
