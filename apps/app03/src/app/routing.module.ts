import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@nx03/ui-login';
import { PetsComponent } from './pets/pets.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
