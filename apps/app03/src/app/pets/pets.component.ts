import { Component, OnInit } from '@angular/core';
import { PetsService, Pet } from '@nx03/core-data';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'nx03-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  pets$;
  selectedPet;
  form: FormGroup;

  constructor(
    private petsService: PetsService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
    this.getPets();
    this.resetPet();
  }

  getPets() {
    this.pets$ = this.petsService.getPets();
  }

  selectPet(pet) {
    console.log('HERE', pet)
    this.selectedPet = pet;
    this.form.patchValue(pet);
  }

  resetPet() {
    const emptyPet: Pet = {
      id: null,
      title: '',
      details: ''
    }
    this.selectPet(emptyPet);
  }

  updatePet(pet) {
    this.petsService.updatePet(pet)
      .subscribe(result => {
        this.getPets();
        this.resetPet();
      });
  }

  createPet(pet) {
    this.petsService.createPet(pet)
      .subscribe(result => {
        this.getPets();
        this.resetPet();
      });
  }

  deletePet(pet) {
    this.petsService.deletePet(pet.id)
      .subscribe(result => this.getPets());
  }

  savePet(pet) {
    console.log('SavePet METHOD', pet)
    if (!pet.id) {
      this.createPet(pet);
    } else {
      this.updatePet(pet);
    }
  }

  cancel() {
    this.resetPet();
  }

  private initForm() {
    this.form = this.fb.group({
      id: null,
      title: ['', Validators.compose([Validators.required])],
      details: ['', Validators.compose([Validators.required])]
    })
  }

}
