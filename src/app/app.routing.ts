import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioComponent } from './formulario/formulario.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ListaComponent } from './lista/lista.component';


const APP_ROUTES:Routes = [
  { path: 'form' , component: FormularioComponent},
  { path: 'nos' , component: QuemSomosComponent},
  { path: 'lista', component: ListaComponent},
  { path: '', component: FormularioComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
