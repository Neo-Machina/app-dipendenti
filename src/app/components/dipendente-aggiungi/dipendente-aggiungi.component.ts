import { Component,OnInit, OnChanges } from '@angular/core';
import { Dipendente } from 'src/app/dipendente';
import { DipendenteServiceService } from 'src/app/services/dipendente-service.service';

@Component({
  selector: 'app-dipendente-aggiungi',
  templateUrl: './dipendente-aggiungi.component.html',
  styleUrls: ['./dipendente-aggiungi.component.css']
})
export class DipendenteAggiungiComponent implements OnInit, OnChanges {
  name = '';
  lastName = '';
  e_mail = '';
  birthday = '';

  constructor(public servizioDipendente: DipendenteServiceService){}

  getInputValue() {
    this.servizioDipendente.dipendenti.push(new Dipendente(this.servizioDipendente.dipendenti.length +1, this.name, this.lastName, this.e_mail, new Date(this.birthday)))

  }

  resetFields() {
    this.name = '';
    this.lastName = '';
    this.e_mail = '';
    this.birthday = '';
  }

  ngOnChanges(): void {

  }
  ngOnInit(): void {

  }

  clickB(event: Event) {
    console.log(event)
  }
}
