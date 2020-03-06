import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  data = [
    {
      icon: "fa fa-map-marker",
      service: "LOCATION",
      value: "Reliance Corporate Park",
      displayicon: ""
    },
    {
      icon: "fa fa-phone",
      service: "TELEPHONE NUMBER",
      value: "02278963827",
      displayicon: ""
    },
    {
      icon: "fa fa-envelope",
      service: "EMAIL",
      value: "mansjsjj@iajs.com",
      displayicon: "fa fa-envelope"
    },
    {
      icon: "fa fa-user",
      service: "L1 NAME",
      value: "Ms.Harbvir Kumar",
      displayicon: "fa fa-group"
    },
    {
      icon: "	fas fa-plane",
      service: "POSITION FROM TOP",
      value: "8",
      displayicon: "fa fa-eye"
    },
    {
      icon: "	fa fa-mobile-phone",
      service: "MOBILE NUMBER",
      value: "+919803432657",
      displayicon: "fa fa-phone"
    },
    {
      icon: "fa fa-birthday-cake",
      service: "BIRTHDAY ",
      value: "09,January",
      displayicon: "fa fa-calendar"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
