import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
//import { HomePage } from '../home/home';
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

  itemArray: Array<String> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) {
    this.itemArray = this.data.scheduleList;
    console.log(this.data.scheduleList);
    console.log(this.itemArray);
  }

  ionViewDidLoad() {

  }

  goBack(){
    this.navCtrl.push("HomePage");
  }



}
