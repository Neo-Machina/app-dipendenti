import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dipendente } from 'src/app/dipendente';
import { DipendenteServiceService } from 'src/app/services/dipendente-service.service';

@Component({
  selector: 'app-dipendente-dettaglio',
  templateUrl: './dipendente-dettaglio.component.html',
  styleUrls: ['./dipendente-dettaglio.component.css']
})
export class DipendenteDettaglioComponent implements OnInit {
  dipendent!: Dipendente;

  constructor(private router: Router, private route: ActivatedRoute, private serviceDipendente: DipendenteServiceService){
    }

  ngOnInit(): void {
    let index = this.route.snapshot.params['indice'];
    this.dipendent = this.serviceDipendente.dipendenti[index - 1];
    console.log(this.dipendent);

  }
}
