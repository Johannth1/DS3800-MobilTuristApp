import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider {

  categoryColor:String;
  categoryTitle:String;
  list: Array<any> = [];
  scheduleList: Array<any> = [];

  opera = {
    title: "Opera",
    desc: "Something about Opera",
    src: "assets/imgs/opera.jpg",
    navbarColor: "Sightseeing",
    tid: "20",
  }
  vigelandsparken = {
    title: "Vigelandsparken",
    desc: "Something about Vigelandsparken",
    src: "assets/imgs/vigelandsparken.jpg",
    navbarColor: "Sightseeing",
    tid: "60",
  }
  vikingmuseum = {
    title: "Viking Museum",
    desc: "Something about Viking Museum",
    src: "assets/imgs/vikingmuseum.jpg",
    navbarColor: "Sightseeing",
    tid: "60",
  }
  louisvuitton = {
    title: "Louis Vuitton",
    desc: "high end",
    src: "assets/imgs/louis.jpg" ,
    navbarColor: "Shopping",
  }
  urmakerbjerke = {
    title: "Urmaker Bjerke",
    desc: "klokker og ur",
    src: "assets/imgs/bjerke.jpg",
    navbarColor: "Shopping",
  }
  hermés = {
    title: "Hermés",
    desc: "high end",
    src:"assets/imgs/hermes.jpg" ,
    navbarColor: "Shopping",
  }
  gucci = {
    title: "Gucci",
    desc: "high end",
    src: "assets/imgs/gucci.jpg",
    navbarColor: "Shopping",
  }
  stenogstrøm = {
    title: "StenogStrøm",
    desc: "high end",
    src:"assets/imgs/sten.jpg" ,
    navbarColor: "Shopping",
  }
  maemo = {
    title: "Maemo",
    desc: "good food",
    src: "assets/imgs/maemo.jpg" ,
    navbarColor: "Food",

  }
  kontrast = {
    title: "Kontrast",
    desc: "good food",
    src: "assets/imgs/kontrast.jpg" ,
    navbarColor: "Food",

  }
  galt = {
    title: "Galt restaurant",
    desc: "good food",
    src:"assets/imgs/galt.jpg" ,
    navbarColor: "Food",

  }
  beijinghouse = {
    title: "Beijing House",
    desc: "good food",
    src: "assets/imgs/beijing.jpg",
    navbarColor: "Food",

  }
  theater = {
    title: "Theater Café",
    desc: "good food",
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
       case "StenogStrøm": {
         return this.stenogstrøm;
       }
       case "Maemo": {
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
       this.categoryColor = "#51344D";
       this.list = [this.opera, this.vigelandsparken, this.vikingmuseum]
       break;
      }
      case "Shopping": {
<<<<<<< HEAD
        this.list = [this.louisvuitton, this.urmakerbjerke, this.hermés, this.gucci, this.stenogstrøm]
=======
        this.categoryColor = "#51344D";
        this.list = []
>>>>>>> e7d4f52cf01cf1271e4a5bb5fcb3503008d4f4a8

       break;
      }
      case "Food": {
<<<<<<< HEAD
        this.list = [this.maemo, this.kontrast, this.galt, this.beijinghouse, this.theater]
=======
        this.categoryColor = "#6F5060";
        this.list = []
>>>>>>> e7d4f52cf01cf1271e4a5bb5fcb3503008d4f4a8
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
