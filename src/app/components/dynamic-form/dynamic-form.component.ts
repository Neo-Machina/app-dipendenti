import { Component } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent {
  isDisplay: Boolean = false;

  singleType!: string;

  typeList: string[] = [
    'Choose a type',
    'text',
    'date',
    'email',
    'number'
  ];


  dipendentForm = new FormGroup({
    class: new FormControl(''),
    label: new FormControl(''),
    ngSelect: new FormControl(this.typeList[0]),
  });

  constructor() {}

  addInput() {
    this.isDisplay = true;
    console.log(this.dipendentForm.controls.class.value);
    console.log(this.dipendentForm.controls.label.value);
    console.log(this.dipendentForm.controls.ngSelect.value);
  };
}
