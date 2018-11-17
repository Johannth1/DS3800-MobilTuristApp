
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.showMap();
    setTimeout(() =>
    this.slides.slideTo(1,300)
    ,300);
    console.log(this.mapRef,'ionViewDidLoad DetailPage');
  }

  showMap(){
    const location = new google.maps.LatLng(50.1244,-0.1111)

    const options = {
      center: location,
      zoom: 10
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }

}
