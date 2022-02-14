import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './start-page/contact/contact.component';
import { FooterComponent } from './start-page/footer/footer.component';
import { HeaderComponent } from './start-page/header/header.component';
import { NavbarComponent } from './start-page/navbar/navbar.component';
import { ProjectsComponent } from './start-page/projects/projects.component';
import {StartPageComponent}  from './start-page/start-page.component'
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    StartPageComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
