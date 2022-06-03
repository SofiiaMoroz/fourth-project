import { 
  Directive, 
  ElementRef, 
  HostBinding, 
  HostListener, 
  OnInit, 
  Renderer2 
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostBinding('style.color') color: string = 'black';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
   
  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'purple');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'purple');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.backgroundColor = 'purple';
    this.color = 'white';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    this.backgroundColor = 'transparent';
    this.color = 'black';
  }
}
