import { Component, OnInit, Input } from '@angular/core';

import { Pet } from '@nx03/core-data';

@Component({
  selector: 'nx03-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})
export class PetsListComponent implements OnInit {

  @Input() pets: Pet[];

  constructor() { }

  ngOnInit() {
  }

}