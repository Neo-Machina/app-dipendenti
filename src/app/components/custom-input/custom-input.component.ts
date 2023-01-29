import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit{
  // @Input() tipo!: string | null;
  // @Input() classe!: string | null;
  // @Input() etichetta!: string | null;
  @Input() aliases!: any;
  @Input() formDipendente!: FormGroup;


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.formDipendente.controls['aliases']);
  }


}
