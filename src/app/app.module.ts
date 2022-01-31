import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TermsComponent } from './pages/terms/terms.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './core/Pipes/search.pipe';
import { DetailModalComponent } from './pages/home/detail-modal/detail-modal/detail-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EditComponent } from './pages/edit/edit.component';
import { EditModalComponent } from './pages/edit/edit-modal/edit-modal.component';
import { CartComponent } from './components/header/cart/cart.component';
import { AddComponent } from './pages/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TermsComponent,
    HeaderComponent,
    ContactComponent,
    SearchPipe,
    DetailModalComponent,
    EditComponent,
    EditModalComponent,
    CartComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
