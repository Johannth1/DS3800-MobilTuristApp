import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider {

  categoryColor:String;
  categoryTitle:String;
  list: Array<any> = [];
  scheduleList: Array<any> = [];

  opera = {
    title: "Opera",
    desc: "mon-fri: 10.00-16.00 (11.00-17.00)",
    src: "assets/imgs/opera.jpg",
    navbarColor: "Sightseeing",
    tid: "1h 30min +",
    location: new google.maps.LatLng(59.9074885,10.7509388),


  }
  vigelandsparken = {
    title: "Vigelandsparken",
    desc: "Always open",
    src: "assets/imgs/vigelandsparken.jpg",
    navbarColor: "Sightseeing",
    tid: "1h 30min +",
  }
  vikingmuseum = {
    title: "Viking Museum",
    desc: "mon-sun: 10.00-16.00",
    src: "assets/imgs/vikingmuseum.jpg",
    navbarColor: "Sightseeing",
    tid: "1h 30min +",
  }
  louisvuitton = {
    title: "Louis Vuitton",
    desc: "mon-fri: 10.00-18.00",
    src: "assets/imgs/louis.jpg" ,
    navbarColor: "Shopping",
  }
  urmakerbjerke = {
    title: "Urmaker Bjerke",
    desc: "mon-fri: 09.00-17.00 (10.00-15.00)",
    src: "assets/imgs/bjerke.jpg",
    navbarColor: "Shopping",
  }
  hermés = {
    title: "Hermés",
    desc: "mon-fri: 10.00-18.00",
    src:"assets/imgs/hermes.jpg" ,
    navbarColor: "Shopping",
  }
  gucci = {
    title: "Gucci",
    desc: "mon-fri: 10.00-19.00 (10.00-18.00)",
    src: "assets/imgs/gucci.jpg",
    navbarColor: "Shopping",
  }
  stenogstrøm = {
    title: "Steen&Strøm",
    desc: "mon-fri: 10.00-19.00 (10.00-18.00)",
    src:"assets/imgs/sten.jpg" ,
    navbarColor: "Shopping",
  }
  maemo = {
    title: "Maaemo",
    desc: "wed-thurs: 18.00-00.00 (12.00-00.00)",
    src: "assets/imgs/maemo.jpg" ,
    navbarColor: "Food",

  }
  kontrast = {
    title: "Kontrast",
    desc: "tues-sun: 18.00-01.00",
    src: "assets/imgs/kontrast.jpg" ,
    navbarColor: "Food",

  }
  galt = {
    title: "Galt restaurant",
    desc: "tues-thurs: 18:00-01-00 (17.45-01.00)",
    src:"assets/imgs/galt.jpg" ,
    navbarColor: "Food",

  }
  beijinghouse = {
    title: "Beijing House",
    desc: "mon-fri: 11.00-22.00 (14.00-22.30)",
    src: "assets/imgs/beijing.jpg",
    navbarColor: "Food",

  }
  theater = {
    title: "Theater Café",
    desc: "mon-sat: 11.00-23.00 (15.00-22.00)",
    src: "assets/imgs/theater.jpg",
    navbarColor: "Food",

  }


  constructor() {
    console.log('Hello DataProvider Provider');
  }


  getObject(name:String){
    switch(name) {
       case "Opera": {
         return this.opera;
       }
       case "Vigelandsparken": {
         return this.vigelandsparken;
       }
       case "Viking Museum": {
         return this.vikingmuseum;
       }
       case "Louis Vuitton": {
         return this.louisvuitton;
       }
       case "Urmaker Bjerke": {
         return this.urmakerbjerke;
       }
       case "Hermés": {
         return this.hermés;
       }
       case "Gucci": {
         return this.gucci;
       }
       case "Steen&Strøm": {
         return this.stenogstrøm;
       }
       case "Maaemo": {
         return this.maemo;
       }
       case "Kontrast": {
         return this.kontrast;
       }
       case "Galt restaurant": {
         return this.galt;
       }
       case "Beijing House": {
         return this.beijinghouse;
       }
       case "Theater Café": {
         return this.theater;
       }
       default: {
         console.log("beep boop");
         break;
      }
    }
  }

setList(name:String){
  switch(name) {
      case "Sightseeing": {
       this.categoryColor = "Sightseeing";
       this.list = [this.opera, this.vigelandsparken, this.vikingmuseum]
       break;
      }
      case "Shopping": {
        this.categoryColor = "Shopping";
        this.list = [this.louisvuitton, this.urmakerbjerke, this.hermés, this.gucci, this.stenogstrøm]

       break;
      }
      case "Food": {
        this.categoryColor = "Food";
        this.list = [this.maemo, this.kontrast, this.galt, this.beijinghouse, this.theater]
       break;
      }
      default: {
        console.log("beep boop");
        break;
      }
    }
  }

  pushToSchedule(item){
    this.scheduleList.push(item);
  }
}
