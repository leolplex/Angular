import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { DetallepeliculaComponent } from './components/detallepelicula/detallepelicula.component';




const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'busqueda/:id', component: BusquedaComponent },
    { path: 'detallepelicula/:id', component: DetallepeliculaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
