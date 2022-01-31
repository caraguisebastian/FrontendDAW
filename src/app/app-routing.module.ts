import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EditComponent } from './pages/edit/edit.component';
import { HomeComponent } from './pages/home/home.component';
import { TermsComponent } from './pages/terms/terms.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit', component: EditComponent },
  { path: '*', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
