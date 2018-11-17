import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  items: Array<String> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) {
    this.items = this.data.scheduleList;
    console.log(this.data.scheduleList);
    console.log(this.items);
  }

  ionViewDidLoad() {

  }



}
