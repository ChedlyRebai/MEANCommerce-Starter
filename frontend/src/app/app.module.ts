import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatDialogModule} from '@angular/material/dialog';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [
      AppComponent,
      MenuComponent,
      ShoppingCartComponent,
      FooterComponent
  ],
  providers: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSlideToggleModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule,
    BrowserAnimationsModule,


  ], bootstrap: [AppComponent],
})
export class AppModule { }
