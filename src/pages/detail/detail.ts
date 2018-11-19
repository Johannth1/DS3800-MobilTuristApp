
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google: any;
@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  @ViewChild(Slides) slides: Slides;
  @ViewChild('map') mapRef: ElementRef;
  map:any;

  itemData;
  heartBool:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) {
    this.itemData = this.data.getObject(this.navParams.get("title"));
    this.heartBool = this.itemData.scheduled;
  }

  ionViewDidLoad() {
    this.showMap();
    setTimeout(() =>
    this.slides.slideTo(1,300)
    ,300);
    console.log(this.mapRef,'ionViewDidLoad DetailPage');
  }

  showMap(){
    const location = this.itemData.location;

    const options = {
      center: location,
      zoom: 16
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }

  addToSchedule(){
    if (this.data.getObject(this.navParams.get("title")).scheduled){
      this.heartBool=false;
      this.data.getObject(this.navParams.get("title")).scheduled=false;
      this.data.removeFromSchedule(this.data.getObject(this.navParams.get("title")));
    } else {
      this.heartBool=true;
      this.data.getObject(this.navParams.get("title")).scheduled=true;
      this.data.pushToSchedule(this.data.getObject(this.navParams.get("title")));
    }
  }
  goToSchedule(){
    this.navCtrl.push("SchedulePage");
  }

  goToInfo(){
    this.navCtrl.push("InfoPage", this.data.getObject(this.navParams.get("title")));
  }

  goToHome(){
    this.navCtrl.popToRoot()
  }
}
