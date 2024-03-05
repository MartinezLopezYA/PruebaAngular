import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjemploComponent } from './containers/ejemplo/ejemplo.component';
import { EjemploCliComponent } from './containers/ejemplo-cli/ejemplo-cli.component';

@NgModule({
  declarations: [
    AppComponent,
    EjemploComponent,
    EjemploCliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
