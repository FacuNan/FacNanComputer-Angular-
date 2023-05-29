import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { SobreNosotrosComponent } from './componentes/sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'home/inicio'
  },
  {
    path:'home',
    component: HomeComponent,
    children:[
      {
        path:'sobre_nosotros',
        component:SobreNosotrosComponent
      },
      {
        path: 'inicio',
        component:InicioComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
