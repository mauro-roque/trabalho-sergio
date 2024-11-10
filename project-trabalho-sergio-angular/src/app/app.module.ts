import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CategoriaService } from './categoria.service';
import { UnidadeFederativaService } from './unidade-federativa.service';
import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { ListaUnidadesFederativasComponent } from './lista-unidades-federativas/lista-unidades-federativas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCategoriasComponent,
    ListaUnidadesFederativasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CategoriaService, UnidadeFederativaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
