import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lez5SignalsComponent } from './lez5-signals.component';

describe('Lez5SignalsComponent', () => {
  let component: Lez5SignalsComponent;
  let fixture: ComponentFixture<Lez5SignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lez5SignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lez5SignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
