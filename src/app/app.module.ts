import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { FormularioComponent }
