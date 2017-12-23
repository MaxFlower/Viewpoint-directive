import { Component, OnInit } from '@angular/core';

import { Config } from './config';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  constructor(private config: Config) { }
}
