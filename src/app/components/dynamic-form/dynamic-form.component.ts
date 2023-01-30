import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit{
  isDisplay: Boolean = false;

  typeList: string[] = [
    'Choose a type',
    'text',
    'date',
    'email',
    'number'
  ];

  lista: Array<any> = [];

  dipendentForm = new FormGroup({
    class: new FormControl(''),
    label: new FormControl(''),
    ngSelect: new FormControl(this.typeList[0])
  });

  aliasForm = this.fb.group({
    aliases: this.fb.array([])
  });

  constructor(private fb: FormBuilder) {}

  get aliases() {
    return this.aliasForm.get('aliases') as FormArray;
  };

  addAlias() {
    this.aliases.push(this.fb.control(''));
    this.lista.push({
      type: this.dipendentForm.controls.ngSelect.value,
      label: this.dipendentForm.controls.label.value,
      class: this.dipendentForm.controls.class.value
    });
    this.dipendentForm.reset({
      'class': '',
      'label': '',
      'ngSelect': this.typeList[0]
    })

    this.isDisplay = true;

  };

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.aliasForm.controls.aliases.value);
  }

  onReset() {
    this.aliases.clear();
    this.lista = [];
    this.isDisplay = false;
  }
}
