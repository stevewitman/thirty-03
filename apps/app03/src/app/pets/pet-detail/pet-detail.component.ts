import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nx03-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.scss']
})
export class PetDetailComponent implements OnInit {
  currentPet;

  @Input() set pet(value) {
    this.currentPet = Object.assign({}, value);
  };

  constructor() { }

  ngOnInit() {
  }

}
