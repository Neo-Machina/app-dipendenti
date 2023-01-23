import { Component, Input, OnInit } from '@angular/core';
import { Dipendente } from 'src/app/dipendente';

@Component({
  selector: 'app-dipendente-dettaglio',
  templateUrl: './dipendente-dettaglio.component.html',
  styleUrls: ['./dipendente-dettaglio.component.css']
})
export class DipendenteDettaglioComponent implements OnInit {
  @Input() dipendent!: Dipendente;

  index: number = 0
  constructor(){
  }

  ngOnInit(): void {

  }
}
