import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lez4StatementComponent } from './lez4-statement.component';

describe('Lez4StatementComponent', () => {
  let component: Lez4StatementComponent;
  let fixture: ComponentFixture<Lez4StatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lez4StatementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lez4StatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
