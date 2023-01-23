import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipendenteDettaglioComponent } from './dipendente-dettaglio.component';

describe('DipendenteDettaglioComponent', () => {
  let component: DipendenteDettaglioComponent;
  let fixture: ComponentFixture<DipendenteDettaglioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DipendenteDettaglioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DipendenteDettaglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
