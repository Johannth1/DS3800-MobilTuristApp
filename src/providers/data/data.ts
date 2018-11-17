import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider {


  categoryTitle:String;
  list: Array<any> = [];
  scheduleList: Array<any> = [];

  opera = {
    title: "Opera",
    desc: "Something about Opera",
    src: "assets/imgs/opera.jpg",
    navbarColor: "sightseeingColor",
  }
  vigelandsparken = {
    title: "Vigelandsparken",
    desc: "Something about Vigelandsparken",
    src: "assets/imgs/vigelandsparken.jpg",
    navbarColor: "sightseeingColor",
  }
  vikingmuseum = {
    title: "Viking Museum",
    desc: "Something about Viking Museum",
    src: "assets/imgs/vikingmuseum.jpg",
    navbarColor: "sightseeingColor",
  }


  constructor() {
    console.log('Hello DataProvider Provider');
  }


  getObject(name:String){
    switch(name) {
       case "Opera": {
         return this.opera;
         break;
       }
       case "Vigelandsparken": {
         return this.vigelandsparken;
         break;
       }
       case "Viking Museum": {
         return this.vikingmuseum;
         break;
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
       this.list = [this.opera, this.vigelandsparken, this.vikingmuseum]
       break;
      }
      case "Shopping": {
        this.list = []

       break;
      }
      case "Food": {
        this.list = []
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

  pushTest(){
    let opera = {
      title: "Opera",
      desc: "Something about Opera",
      src: "assets/imgs/opera.jpg",
      navbarColor: "sightseeingColor",
    }
  }
}
