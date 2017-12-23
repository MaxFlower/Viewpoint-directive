import { Injectable, Inject, NgZone } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Config } from '../../config';

@Injectable()
export class ViewpointSizeService {
  public windowWidthBehaviorSubject: BehaviorSubject<string> = new BehaviorSubject<string>(this.getWidthType());

  constructor(
    private ngZone: NgZone,
    private config: Config) {
      
      window.onresize = (e) => {
        ngZone.run(() => {
          this.windowWidthBehaviorSubject.next(this.getWidthType());
        });
      };
  }

  private getWidthType(): string {
    let viewportWidth: number = window.innerWidth;
    
    if (viewportWidth < this.config.breakpoints.medium) {
      return 'small';
    } else if (this.config.breakpoints.medium <= viewportWidth && viewportWidth < this.config.breakpoints.large) {
      return 'medium';
    } else if (this.config.breakpoints.large <= viewportWidth) {
      return 'large';
    }

  }

}
