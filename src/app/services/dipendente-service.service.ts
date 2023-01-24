import { Injectable } from '@angular/core';
import { Dipendente } from '../dipendente';

@Injectable({
  providedIn: 'root'
})
export class DipendenteServiceService{
  dipendenti: Dipendente[] = [];

  constructor() {
    this.dipendenti.push(new Dipendente(1, 'Marco', 'Rossi', 'rossi@mail.com', new Date(1990, 4, 7)));
    this.dipendenti.push(new Dipendente(2, 'Angela', 'Verdi', 'angela@mail.com',new Date(1995, 11, 17)));
  };
}
