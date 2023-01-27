import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit{
  @Input() tipo!: string | null;
  @Input() classe!: string | null;
  @Input() etichetta!: string | null;

  constructor() {}

  ngOnInit(): void {
  }


}
