import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts.component';
import { AccountsComponent } from './accounts.component';
import { ActivitiesComponent } from './activities.component';

import { MaterialModule } from './material.module';

export const routes =  [
  { path: 'accounts', component: AccountsComponent, label: 'Accounts' },
  { path: 'contacts', component: ContactsComponent, label: 'Contacts' },
  { path: 'activities', component: ActivitiesComponent, label: 'Activities' }
 ];


@NgModule({
  imports:      [ CommonModule,  RouterModule.forRoot(routes), BrowserAnimationsModule, ReactiveFormsModule, BrowserModule, FormsModule, MaterialModule ],
  declarations: [ AppComponent, ActivitiesComponent, ContactsComponent, AccountsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
