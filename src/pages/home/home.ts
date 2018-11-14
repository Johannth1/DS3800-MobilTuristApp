import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../pages/list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToSightseeing() {
    let data = {
      navbarColor: "sightseeingColor",
      pageTitle: "Sightseeing",
      items: [
        {
          title: "Opera",
          desc: "Something about Opera",
          src: "assets/imgs/opera.jpg"
        },
        {
          title: "Vigelandsparken",
          desc: "Something about Vigelandsparken",
          src: "assets/imgs/vigelandsparken.jpg"
        },
        {
          title: "Viking Museum",
          desc: "Something about Viking Museum",
          src: "assets/imgs/vikingmuseum.jpg"
        },
        {
          title: "Viking Museum",
          desc: "Something about Viking Museum",
          src: "assets/imgs/vikingmuseum.jpg"
        },
        {
          title: "Viking Museum",
          desc: "Something about Viking Museum",
          src: "assets/imgs/vikingmuseum.jpg"
        },
      ]
    };
    this.navCtrl.push("ListPage", data);
  }
  goToShopping() {
    let data = {
      navbarColor: "shoppingColor",
      pageTitle: "Shopping",
      items: [
        {
          title: "Opera",
          desc: "Something about Opera",
          src: "assets/imgs/opera.jpg"
        },
        {
          title: "Opera",
          desc: "Something about Opera",
          src: "assets/imgs/opera.jpg"
        },
      ]
    };
    this.navCtrl.push("ListPage", data);
  }
  goToFood() {
    let data = {
      navbarColor: "foodColor",
      pageTitle: "Food",
      items: [
        {
          title: "Opera",
          desc: "Something about Opera",
          src: "assets/imgs/opera.jpg"
        },
      ]
    };
    this.navCtrl.push("ListPage", data);
  }
  goToSchedule() {
    //this.navCtrl.push("schedulePage");
  }

}
