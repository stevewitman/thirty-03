import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '@nx03/material';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { UiLoginModule } from '@nx03/ui-login';
import { PetsComponent } from './pets/pets.component';
import { PetsListComponent } from './pets/pets-list/pets-list.component';
import { PetDetailComponent } from './pets/pet-detail/pet-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetsListComponent,
    PetDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    RoutingModule,
    UiLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
