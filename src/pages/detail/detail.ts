
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) {
    this.itemData = this.data.getObject(this.navParams.get("title"));
    //console.log(this.data.getObject(this.navParams.get("title")))
    //console.log(this.itemData);
  }

  ionViewDidLoad() {
    this.showMap();
    setTimeout(() =>
    this.slides.slideTo(1,300)
    ,300);
    console.log(this.mapRef,'ionViewDidLoad DetailPage');
  }

  showMap(){
    const location = new google.maps.LatLng(59.9074885,10.7509388)

    const options = {
      center: location,
      zoom: 16
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }

  addToSchedule(){
    console.log("itemData before push: " + this.itemData);
    console.log(this.data.getObject(this.navParams.get("title")));
    this.data.pushToSchedule(this.data.getObject(this.navParams.get("title")));
    console.log(this.data.scheduleList);
  }
}
