import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DipendenteAggiungiComponent } from './components/dipendente-aggiungi/dipendente-aggiungi.component';
import { DipendenteListaComponent } from './components/dipendente-lista/dipendente-lista.component';
import { DipendenteDettaglioComponent } from './components/dipendente-dettaglio/dipendente-dettaglio.component';
import { FormsModule } from '@angular/forms';
import { CustomDatePipe } from './pipes/custom.datepipe';
import { registerLocaleData } from '@angular/common';
import localIt from '@angular/common/locales/it';

registerLocaleData(localIt);
@NgModule({
  declarations: [
    AppComponent,
    DipendenteAggiungiComponent,
    DipendenteListaComponent,
    DipendenteDettaglioComponent,
    CustomDatePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ {provide: LOCALE_ID, useValue: "it-IT"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
