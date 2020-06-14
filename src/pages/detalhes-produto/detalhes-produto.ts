import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhesProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-produto',
  templateUrl: 'detalhes-produto.html',
})
export class DetalhesProdutoPage {
  public nome: String;
  public descricao: String;
  public preco: number;
  public enderecoImagem: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nome = this.navParams.get('tituloSelecionado');
    this.descricao = this.navParams.get('descricaoSelecionada');
    this.preco = this.navParams.get('precoSelecionado');
    this.enderecoImagem = this.navParams.get('imagem');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesProdutoPage');
  }

}
