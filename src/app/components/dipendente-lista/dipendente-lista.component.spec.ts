import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipendenteListaComponent } from './dipendente-lista.component';

describe('DipendenteListaComponent', () => {
  let component: DipendenteListaComponent;
  let fixture: ComponentFixture<DipendenteListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DipendenteListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DipendenteListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
