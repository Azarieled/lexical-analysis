import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {Lab1Component} from "./labs/lab1.component";
import {Lab2Component} from "./labs/lab2.component";
import {Lab3Component} from "./labs/lab3.component";

@Component({
  selector: 'lexical-analysis-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {
    path: '/lab1',
    name: 'Lab1',
    component: Lab1Component,
    useAsDefault: true
  },
  {
    path: '/lab2',
    name: 'Lab2',
    component: Lab2Component
  },
  {
    path: '/lab3',
    name: 'Lab3',
    component: Lab3Component
  }
])
export class AppComponent { }
