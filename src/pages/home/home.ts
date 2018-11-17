import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
//import { ListPage } from '../pages/list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  list: Array<any> = [];

  constructor(public navCtrl: NavController, public data: DataProvider) {

  }

  goToSightseeing() {
    this.data.setList("Sightseeing");
    this.data.categoryTitle = "Sightseeing";
    this.navCtrl.push("ListPage");
  }
  goToShopping() {
    this.data.setList("Shopping");
    this.data.categoryTitle = "Shopping";
    this.navCtrl.push("ListPage");
  }

  goToFood() {
    this.data.setList("Food");
    this.data.categoryTitle = "Food";
    this.navCtrl.push("ListPage");
  }
  goToSchedule() {
    this.data.categoryTitle = "Schedule";
    this.navCtrl.push("SchedulePage");
  }

}
