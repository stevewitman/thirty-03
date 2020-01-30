import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Pet } from '@nx03/core-data';

@Component({
  selector: 'nx03-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})
export class PetsListComponent implements OnInit {

  @Input() pets: Pet[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
