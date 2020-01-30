import { Component, OnInit } from '@angular/core';
import { PetsService, Pet } from '@nx03/core-data';

@Component({
  selector: 'nx03-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  pets$;
  selectedPet;

  constructor(private petsService: PetsService) { }

  ngOnInit() {
    this.getPets();
  }

  getPets() {
    this.pets$ = this.petsService.getPets();
  }

  selectPet(pet) {
    this.selectedPet = pet;
  }

}
