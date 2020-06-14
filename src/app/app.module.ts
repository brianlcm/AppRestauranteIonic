import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListaCategoriasPage } from '../pages/lista-categorias/lista-categorias';
import { LanchesPage } from '../pages/lanches/lanches';
import { PratosPage } from '../pages/pratos/pratos';
import { SobremesasPage } from '../pages/sobremesas/sobremesas';
import { BebidasPage } from '../pages/bebidas/bebidas';
import { DetalhesProdutoPage } from '../pages/detalhes-produto/detalhes-produto';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaCategoriasPage,
    LanchesPage,
    PratosPage,
    SobremesasPage,
    BebidasPage,
    DetalhesProdutoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaCategoriasPage,
    LanchesPage,
    PratosPage,
    SobremesasPage,
    BebidasPage,
    DetalhesProdutoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
