import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[LiftLogo]'
})
export class LiftLogoDirective {

  constructor(private el: ElementRef,
    private renderer: Renderer2) {this.liftLogo('5%')}
  
    liftLogo(val: string)
    {
      this.renderer.setStyle(this.el.nativeElement, 'margin-bottom', val);
    }

}
