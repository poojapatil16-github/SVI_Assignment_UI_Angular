import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatGridListModule } from '@angular/material/grid-list';
import {  MatListModule } from '@angular/material/list';
import {  MatCardModule } from '@angular/material/card';
import {   MatButtonModule } from '@angular/material/button';
import {   MatFormFieldModule } from '@angular/material/form-field';
import {   MatInputModule } from '@angular/material/input';
import {   MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AngularIbanModule } from 'angular-iban';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';


const materialModules = [  
  MatGridListModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatIconModule,
  FormsModule
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    materialModules,
    AngularIbanModule,
    ChartsModule,
    HttpClientModule
  ],
  exports: [
    materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
