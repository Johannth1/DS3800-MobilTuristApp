import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  navbarColor:String;
  pageTitle:String;
  items: Array<String> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  goToDetail(){
    let data = {
    this.navCtrl.push("DetailPage", data);
  }
}

  ionViewDidLoad() {
    this.navbarColor = this.navParams.get("navbarColor") || "main";
    this.pageTitle = this.navParams.get("pageTitle") || "Luxing";
    this.items = this.navParams.get("items");
    //console.log(this.sights[0].title);
  }

}
