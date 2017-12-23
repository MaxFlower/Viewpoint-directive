import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Config } from './config'
import { DemoModule } from './demo/demo.module';
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, DemoModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ Config ]  
})
export class AppModule { }
