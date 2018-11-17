import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  //selector: 'test-this',
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  items: Array<String> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) {

  }

  goToDetail(item){
    this.navCtrl.push("DetailPage", item);
}

  ionViewDidLoad() {
    this.items = this.data.list;
    console.log(this.data.list);
  }

}
