import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators, FormRecord } from '@angular/forms';
import { Dipendente } from '../dipendente';

@Component({
  selector: 'app-record-form',
  templateUrl: './record-form.component.html',
  styleUrls: ['./record-form.component.css']
})
export class RecordFormComponent implements OnInit{
  dipendente!: Dipendente;

  formDipendente = new FormRecord({});
  constructor(private fb: FormBuilder) {
    this.formDipendente.addControl('anagrafica', this.fb.record({}));

    (<FormRecord>this.formDipendente.get('anagrafica'))?.addControl('nome', this.fb.control('', [Validators.required, Validators.minLength(3)]));
    (<FormRecord>this.formDipendente.get('anagrafica'))?.addControl('cognome', this.fb.control('', [Validators.required, Validators.minLength(3)]));
    (<FormRecord>this.formDipendente.get('anagrafica'))?.addControl('dataNascita', this.fb.control(new Date(''), [Validators.required]));

    this.formDipendente.addControl('altreInfo', this.fb.record({}));
    (<FormRecord>this.formDipendente.get('altreInfo'))?.addControl('email', this.fb.control('', [Validators.required, Validators.email]));
    (<FormRecord>this.formDipendente.get('altreInfo'))?.addControl('hobbies', new FormArray([this.fb.control('')]));
  };

  ngOnInit(): void {

  };

  get anagrafica() {
    return (<FormRecord>this.formDipendente.get('anagrafica'))
  };

  get altreInfo() {
    return (<FormRecord>this.formDipendente.get('altreInfo'))
  };

  get hobbies() {
    return (<FormArray>this.formDipendente.get('altreInfo.hobbies'))
  };

  onSubmit() {
    console.log(this.formDipendente.value)
  };

  addHobby() {
    this.hobbies.push(this.fb.control(''))
  };

  removeHobby(index: number) {
    this.hobbies.removeAt(index)
  };
}
