import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@nx03/material';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { UiLoginModule } from '@nx03/ui-login';
import { PetsComponent } from './pets/pets.component'

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    RoutingModule,
    UiLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
