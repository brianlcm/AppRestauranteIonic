import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LanchesPage } from '../lanches/lanches';
import { BebidasPage } from '../bebidas/bebidas';
import { SobremesasPage } from '../sobremesas/sobremesas';
import { PratosPage } from '../pratos/pratos';
import { DetalhesProdutoPage } from '../detalhes-produto/detalhes-produto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  selecionaProduto(titulo: String, descricao: String, preco: number, caminhoImagem: String){
    this.navCtrl.push(DetalhesProdutoPage, {tituloSelecionado: titulo, descricaoSelecionada: descricao, precoSelecionado: preco, imagem: caminhoImagem},{});
  }

  abreLanches(){
    this.navCtrl.push(LanchesPage, {}, {} );    
  }

  abrePratos(){
    this.navCtrl.push(PratosPage, {}, {} );    
  }

  abreBebidas(){
    this.navCtrl.push(BebidasPage, {}, {} );    
  }

  abreSobremesas(){
    this.navCtrl.push(SobremesasPage, {}, {} );    
  }
  

}
