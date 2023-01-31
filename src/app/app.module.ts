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
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecordFormComponent } from './record-form/record-form.component';

registerLocaleData(localIt);

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'aggiungi', component: DipendenteAggiungiComponent },
  { path: 'form-dinamico', component: DynamicFormComponent },
  { path: 'form-record', component: RecordFormComponent },
  { path: 'lista-dettagli', component: DipendenteListaComponent },
  { path: 'dettaglio/:indice', component: DipendenteDettaglioComponent},
  { path: '**', component: HomeComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    DipendenteAggiungiComponent,
    DipendenteListaComponent,
    DipendenteDettaglioComponent,
    CustomDatePipe,
    HomeComponent,
    DynamicFormComponent,
    RecordFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule],
  providers: [ {provide: LOCALE_ID, useValue: "it-IT"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
