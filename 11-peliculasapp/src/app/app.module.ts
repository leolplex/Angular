import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule, HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

import { APP_ROUTING } from './routes';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { DetallepeliculaComponent } from './components/detallepelicula/detallepelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BusquedaComponent,
    PeliculaComponent,
    DetallepeliculaComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
