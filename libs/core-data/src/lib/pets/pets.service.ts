import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  private URL = 'https://server-30-x-30.herokuapp.com/pets'

  constructor(private httpClient: HttpClient) { }

  getPets() {
    return this.httpClient.get(this.URL);
  }

  createPet(pet) {
    return this.httpClient.post(this.URL, pet);
  }

  updatePet(pet) {
    return this.httpClient.patch(this.URL + '/' + pet.id, pet)
  }

  deletePet(id) {
    return this.httpClient.delete(this.URL + '/' + id)
  }
}
