import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackHighLightRed]'
})
export class BackHighLightRedDirective {
  @Input() dafaultColor : string = 'transparent';
  @Input() highlightColor : string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor:string;

  
  constructor(private el:ElementRef, private renderer:Renderer2) {}
   ngOnInit(){
     this.backgroundColor = this.dafaultColor
    //  this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue');
    //  this.el.nativeElement.style.backgroundColor = 'red';
   }

   @HostListener('mouseenter') mouseover(eventData:Event){
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
   }

  @HostListener('mouseleave') mouseleave(eventData : Event){
      // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent');
      this.backgroundColor = this.dafaultColor;
  }
}
