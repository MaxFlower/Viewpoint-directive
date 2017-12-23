import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';

import 'rxjs/Rx'; // для asObservable, distinctUntilChanged можно упростить
import { Subscription } from "rxjs/Subscription";

import { ViewpointSizeService } from './viewpoint-size.service';

@Directive({
  selector: '[ifViewportSize]',
  inputs: ['ifViewportSize'] 
})
export class IfViewportSizeDirective implements OnDestroy {  
  private externalType: string;
  private internalType: string;
  private subscription: Subscription;    

  constructor(    
    private viewpointSizeService: ViewpointSizeService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {

      this.subscription = this.viewpointSizeService.windowWidthBehaviorSubject.asObservable().distinctUntilChanged().subscribe(next => {
        this.externalType = next;
        this.setVisible(next, this.internalType);      
      }); 
  }

  @Input('ifViewportSize') set ifViewportSize(value: string) {
    this.internalType = value;
    this.setVisible(this.externalType, this.internalType);    
  };    

  public setVisible(extType: string, intType: string): void {    
    if (extType === intType) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }    
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
}
