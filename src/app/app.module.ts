import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { SobreNosotrosComponent } from './componentes/sobre-nosotros/sobre-nosotros.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EncabezadoComponent,
    SobreNosotrosComponent,
    HomeComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
