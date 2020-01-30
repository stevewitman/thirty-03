import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'nx03-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.scss']
})
export class PetDetailComponent implements OnInit {
  currentPet;
  form: FormGroup;
  originalTitle;

  @Input() set pet(value) {
    if (value) this.originalTitle = value.title;
    this.currentPet = Object.assign({}, value);
  };

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm()
  }

  private initForm() {
    this.form = this.fb.group({
      title: ['', [
        Validators.required,
      ]],
      details: [''],
    })
  }

  get title() {
    return this.form.get('title');
  }

  get details() {
    return this.form.get('details');
  }

}
