import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  itemData;
  test:String = "\"background-color:{{data.categoryTitle}};\""

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) {
    this.itemData = this.data.getObject(this.navParams.get("title"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  goToHome(){
    this.navCtrl.popToRoot()
  }

}
