import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipendenteAggiungiComponent } from './dipendente-aggiungi.component';

describe('DipendenteAggiungiComponent', () => {
  let component: DipendenteAggiungiComponent;
  let fixture: ComponentFixture<DipendenteAggiungiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DipendenteAggiungiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DipendenteAggiungiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
