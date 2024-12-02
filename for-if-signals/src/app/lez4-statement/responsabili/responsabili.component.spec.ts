import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsabiliComponent } from './responsabili.component';

describe('ResponsabiliComponent', () => {
  let component: ResponsabiliComponent;
  let fixture: ComponentFixture<ResponsabiliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsabiliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsabiliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
