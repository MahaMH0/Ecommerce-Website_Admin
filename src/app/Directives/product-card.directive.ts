import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ProductCard]'
})
export class ProductCardDirective implements OnChanges ,OnInit{
   @Input() highlightColor:String='green';
   @Input() defaultColor:String='lightgreen';
   @Input() CardBackColor:string='light';
  constructor(private element: ElementRef) {
    element.nativeElement.style.border=`2px solid ${this.defaultColor}`;
    // element.nativeElement.style.backgroundColor=this.CardBackColor;
   }
   @HostListener('mouseover') onHover ()
   {
     this.element.nativeElement.style.border=`3px ${this.highlightColor} solid`;
     //boxShadow=`10px 20px 30px ${this.defaultColor}`
   }
 
   @HostListener('mouseout') onMouseOut()
   {
     this.element.nativeElement.style.border=`2px ${this.defaultColor} solid`;
   }
   ngOnInit(): void {
   
   }
   ngOnChanges(changes: SimpleChanges): void {
    this.element.nativeElement.style.backgroundColor=this.CardBackColor;
    }

}
