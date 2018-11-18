import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  itemArray: Array<String> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) {

  }

  goToDetail(item){
    this.navCtrl.push("DetailPage", item);
    console.log("item: " + item);
  }

  ionViewDidLoad() {
    this.itemArray = this.data.list;
    console.log(this.data.list);
  }

  contentPadding() {
  let styles = {
    'background-color' : this.data.categoryColor,
  };
  return styles;
  }

}
