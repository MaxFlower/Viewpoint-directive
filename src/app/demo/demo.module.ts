import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestComponent } from './test/test.component';
import { IfViewportSizeDirective } from './test/if-viewportsize.directive';
import { ViewpointSizeService } from './test/viewpoint-size.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ TestComponent, IfViewportSizeDirective ],
  declarations: [ TestComponent, IfViewportSizeDirective ],
  providers: [ ViewpointSizeService ]
})
export class DemoModule { }