import { Component, OnInit } from '@angular/core';
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


  dipendentForm = new FormGroup({
    class: new FormControl(''),
    label: new FormControl(''),
    ngSelect: new FormControl(this.typeList[0]),
    aliases: this.fb.array([
    ])
  });

  constructor(private fb: FormBuilder) {}

  get aliases() {
    return this.dipendentForm.get('aliases') as FormArray;
  };

  addAlias() {
    // this.aliases.push(this.fb.control(this.dipendentForm.controls.ngSelect.value));
    // this.aliases.push(this.fb.control(this.dipendentForm.controls.label.value));
    // this.aliases.push(this.fb.contol(this.dipendentForm.controls.class.value));
    this.aliases.push(this.fb.control(''));
    this.isDisplay = true;
  };

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.dipendentForm);
  }

  onReset() {

  }
}
