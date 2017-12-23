import { Injectable, Optional } from '@angular/core';

import { IConfig } from './definitions/i-config';

@Injectable()
export class Config {

    public breakpoints: IConfig = {
        medium: 600,
        large: 900
    }
}
