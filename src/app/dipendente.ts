import { Data } from "@angular/router"

export class Dipendente {
    constructor(public id: number, public nome: string, public cognome: string, public email: string, public dataNascita: Date){
    }

    getNomeCompleto(): string {
      const nomeCompleto = this.nome + this.cognome
      return nomeCompleto
    }
}
