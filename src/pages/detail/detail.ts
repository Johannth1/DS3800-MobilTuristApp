import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  @ViewChild(Slides) slides: Slides;

  itemData;

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) {
    this.itemData = this.data.getObject(this.navParams.get("title"));
    console.log(this.itemData);
  }

  ionViewDidLoad() {
    setTimeout(() =>
    this.slides.slideTo(1,300)
    ,300);
  }

  addToSchedule(){
    console.log("itemData before push: " + this.itemData);
    console.log(this.data.getObject(this.navParams.get("title")));
    this.data.pushToSchedule(this.data.getObject(this.navParams.get("title")));
    console.log(this.data.scheduleList);
  }
}
