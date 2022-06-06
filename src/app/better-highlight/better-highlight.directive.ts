import { 
  Directive, 
  ElementRef, 
  HostBinding, 
  HostListener, 
  Input, 
  OnInit, 
  Renderer2 
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultBgColor: string = 'transparent';
  @Input('appBetterHighlight') highlightBgColor: string = 'blue';
  @Input() defaultColor: string = 'black';
  @Input() highlightColor: string = 'white';

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string = this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
   
  ngOnInit(): void {
    this.backgroundColor = this.defaultBgColor;
    this.color = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightBgColor;
    this.color = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultBgColor;
    this.color = this.defaultColor;
  }
}
