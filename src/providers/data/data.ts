import { Injectable } from '@angular/core';
declare var google: any;
@Injectable()
export class DataProvider {

  categoryColor:String;
  categoryTitle:String;
  list: Array<any> = [];
  scheduleList: Array<any> = [];

  opera = {
    objName: "opera",
    title: "Opera",
    desc: "mon-fri: 10.00-16.00 (11.00-17.00)",
    src: "assets/imgs/opera.jpg",
    navbarColor: "Sightseeing",
    tid: "1h 30min +",
    location: new google.maps.LatLng(59.9074885,10.7509388),
    scheduled: false,
    fullDesc: "The Oslo Opera House is the home of The Norwegian National Opera and Ballet, and the national opera theatre in Norway. The building is situated in the Bjørvika neighbourhood of central Oslo, at the head of the Oslofjord.",
    address: "Kirsten Flagstads Plass 1, 0150 Oslo",
    link: "https://operaen.no/en/",
  }
  vigelandsparken = {
    objName: "vigelandsparken",
    title: "Vigelandsparken",
    desc: "Always open",
    src: "assets/imgs/vigelandsparken.jpg",
    navbarColor: "Sightseeing",
    tid: "1h 30min +",
    location: new google.maps.LatLng(59.9270317,10.6986763),
    scheduled: false,
    fullDesc: "Sculpture park & museum displaying the works of Gustav Vigeland, plus temporary art exhibitions.",
    address: "Nobels gate 32, 0268 Oslo",
    link: "http://www.vigeland.museum.no/en/vigeland-park",
  }
  vikingmuseum = {
    objName: "vikingmuseum",
    title: "Viking Museum",
    desc: "mon-sun: 10.00-16.00",
    src: "assets/imgs/vikingmuseum.jpg",
    navbarColor: "Sightseeing",
    tid: "1h 30min +",
    location: new google.maps.LatLng(59.9049475,10.6822188),
    scheduled: false,
    fullDesc: "The Viking Ship Museum is located at Bygdøy in Oslo, Norway. It is part of the Museum of Cultural History of the University of Oslo, and houses archaeological finds from Tune, Gokstad, Oseberg and the Borre mound cemetery.",
    address: "Huk Aveny 35, 0287 Oslo",
    link: "https://www.khm.uio.no/besok-oss/vikingskipshuset/",
  }
  louisvuitton = {
    objName: "louisvuitton",
    title: "Louis Vuitton",
    desc: "mon-fri: 10.00-18.00",
    src: "assets/imgs/louis.jpg" ,
    navbarColor: "Shopping",
    location: new google.maps.LatLng(59.9121897,10.7401943),
    scheduled: false,
    fullDesc: "Louis Vuitton Malletier, commonly referred to as Louis Vuitton, or shortened to LV, is a French fashion house and luxury retail company founded in 1854 by Louis Vuitton.",
    address: "Nedre Slottsgate 13, 0157 Oslo",
    link: "https://www.louisvuitton.com/",
  }
  urmakerbjerke = {
    objName: "urmakerbjerke",
    title: "Urmaker Bjerke",
    desc: "mon-fri: 09.00-17.00 (10.00-15.00)",
    src: "assets/imgs/bjerke.jpg",
    navbarColor: "Shopping",
    location: new google.maps.LatLng(59.9120693,10.7401465),
    scheduled: false,
    fullDesc: "Urmaker Bjerke ble etablert i 1923. I over 90 år har vi vært en anerkjent og ledende leverandør av ur og smykker – til kunder som setter ekstra høye krav til kvalitet og service.",
    address: "Karl Johans gate 31, 0159 Oslo",
    link: "https://www.urmaker-bjerke.no/",
  }
  hermés = {
    objName: "hermés",
    title: "Hermés",
    desc: "mon-fri: 10.00-18.00",
    src:"assets/imgs/hermes.jpg" ,
    navbarColor: "Shopping",
    location: new google.maps.LatLng(59.911848,10.7397372),
    scheduled: false,
    fullDesc: "Hermès International S.A., or simply Hermès is a French high fashion luxury goods manufacturer established in 1837. It specializes in leather, lifestyle accessories, home furnishings, perfumery, jewellery, watches and ready-to-wear. Its logo, since the 1950s, is of a Duc carriage with horse.",
    address: "Nedre Slottsgate 15, 0157 Oslo",
    link: "https://www.hermes.com/no/en/",
  }
  gucci = {
    objName: "gucci",
    title: "Gucci",
    desc: "mon-fri: 10.00-19.00 (10.00-18.00)",
    src: "assets/imgs/gucci.jpg",
    navbarColor: "Shopping",
    location: new google.maps.LatLng(59.9119912,10.7413791),
    scheduled: false,
    fullDesc: "Luxury brand known for modern, Italian-crafted leather goods, apparel & accessories for men & women.",
    address: "Nedre Slottsgate 8, 0157 Oslo",
    link: "https://www.gucci.com/",
  }
  stenogstrøm = {
    objName: "stenogstrøm",
    title: "Steen&Strøm",
    desc: "mon-fri: 10.00-19.00 (10.00-18.00)",
    src:"assets/imgs/sten.jpg" ,
    navbarColor: "Shopping",
    location: new google.maps.LatLng(59.9118852,10.7408589),
    scheduled: false,
    fullDesc: "Steen & Strøm is a Scandinavian retail and real estate company that owns and operates 52 shopping centres in Norway, Sweden and Denmark. In 2006 the shopping centers had 3,300 lessees with total revenue of about NOK 40 billion.",
    address: "Nedre Slottsgate 8, 0157 Oslo",
    link: "http://www.steenogstromoslo.no/",
  }
  maemo = {
    objName: "maemo",
    title: "Maaemo",
    desc: "wed-thurs: 18.00-00.00 (12.00-00.00)",
    src: "assets/imgs/maemo.jpg" ,
    navbarColor: "Food",
    location: new google.maps.LatLng(59.9106324,10.758386),
    scheduled: false,
    fullDesc: "Chic, fine dining restaurant for seasonal, Norwegian menu with wine pairings, in minimalist setting.",
    address: "Schweigaards gate 15B, 0191 Oslo",
    link: "https://maaemo.no/",

  }
  kontrast = {
    objName: "kontrast",
    title: "Kontrast",
    desc: "tues-sun: 18.00-01.00",
    src: "assets/imgs/kontrast.jpg" ,
    navbarColor: "Food",
    location: new google.maps.LatLng(59.9229445,10.7489405),
    scheduled: false,
    fullDesc: "Kontrast is a Modern Scandinavian restaurant with a focus on using ingredients that are both local and at the peak of their season. Our main goals are to offer world class, organic and ethically sourced ingredients from within Norway and to showcase the farmers who produce them.",
    address: "Maridalsveien 15a, 0175 Oslo",
    link: "http://www.restaurant-kontrast.no/en/",

  }
  galt = {
    objName: "galt",
    title: "Galt restaurant",
    desc: "tues-thurs: 18:00-01-00 (17.45-01.00)",
    src:"assets/imgs/galt.jpg" ,
    navbarColor: "Food",
    location: new google.maps.LatLng(59.916549,10.7113581),
    scheduled: false,
    fullDesc: "We’re a bunch of colleagues, having worked together at several restaurants, among them Restaurant Oscarsgate and Fauna. We’re altogether five co owners, working in the kitchen and the service.",
    address: "Frognerveien 12, 0263 Oslo",
    link: "http://www.galt.no/",

  }
  beijinghouse = {
    objName: "beijinghouse",
    title: "Beijing House",
    desc: "mon-fri: 11.00-22.00 (14.00-22.30)",
    src: "assets/imgs/beijing.jpg",
    navbarColor: "Food",
    location: new google.maps.LatLng(59.9170727,10.7395263),
    scheduled: false,
    fullDesc: "At Peking Sichuan you will find all the typical Chinese dishes from Sichuan (Szechuan) and Guangdong (Hong Kong). We have 100 tables in the restaurant and will gladly receive complete company orders (Reservations for Christmas, Confirmations, Weddings etc.).",
    address: "Munchs gate 5, 0165 Oslo",
    link: "http://beijinghouse.no/en/",

  }
  theater = {
    objName: "theater",
    title: "Theater Café",
    desc: "mon-sat: 11.00-23.00 (15.00-22.00)",
    src: "assets/imgs/theater.jpg",
    navbarColor: "Food",
    location: new google.maps.LatLng(59.9140427,10.7317023),
    scheduled: false,
    fullDesc: "Viennese-style, white-tablecloth cafe in venerable hotel, for brasserie menu & afternoon tea.",
    address: "Stortingsgata 24-26, 0117 Oslo",
    link: "https://www.theatercafeen.no/",

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
      if(!this.scheduleList.includes(item)){
        this.scheduleList.push(item);
      }
    }

    removeFromSchedule(currentItem){
      let items: Array<String> = [];
      items = this.scheduleList;
      for(var i=0;i<=items.length;i++){
        if(items[i] === currentItem){ // || items[i].title === currentItem.title){
          this.scheduleList.splice(i, 1);
        }
      }
    }
}
