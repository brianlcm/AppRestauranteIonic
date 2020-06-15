import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhesProdutoPage } from '../detalhes-produto/detalhes-produto';

/**
 * Generated class for the PratosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pratos',
  templateUrl: 'pratos.html',
})
export class PratosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PratosPage');
  }

  selecionaProduto(titulo: String, descricao: String, preco: number, caminhoImagem: String){
    this.navCtrl.push(DetalhesProdutoPage, {tituloSelecionado: titulo, descricaoSelecionada: descricao, precoSelecionado: preco, imagem: caminhoImagem},{});
  }
}
