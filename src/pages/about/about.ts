import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public musica: string = " Sábado de sol  aluguei um caminhão  pra levar a galera pra comer feijão chegando lá mas que vergonha só tinha maconha os  maconheiros tavam doidão querendo o meu feijão";

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    
  }

}
