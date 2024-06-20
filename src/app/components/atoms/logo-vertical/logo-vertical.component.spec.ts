import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoVerticalComponent } from './logo-vertical.component';

describe('LogoVerticalComponent', () => {
  let component: LogoVerticalComponent;
  let fixture: ComponentFixture<LogoVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoVerticalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
