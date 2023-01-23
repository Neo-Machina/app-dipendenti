import { Component, Input, OnInit } from '@angular/core';
import { Dipendente } from 'src/app/dipendente';
import { DipendenteServiceService } from 'src/app/services/dipendente-service.service';

@Component({
  selector: 'app-dipendente-lista',
  templateUrl: './dipendente-lista.component.html',
  styleUrls: ['./dipendente-lista.component.css']
})
export class DipendenteListaComponent implements OnInit{
  display: boolean = false;
  currentId: any;
  dipendente!: Dipendente;

  constructor(public servizioDipendente: DipendenteServiceService) {}

  ngOnInit(): void {

  }

  getNameAndBirthday(selectedId: any){
    this.currentId = selectedId.textContent;
    this.display = true;
    this.dipendente = this.servizioDipendente.dipendenti[this.currentId -1];
  }
}
