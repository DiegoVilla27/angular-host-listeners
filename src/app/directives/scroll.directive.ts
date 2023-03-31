import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  // SIDES
  // .scrollWidth
  // .scrollHeight
  // .scrollLeft
  // .scrollTop

  @HostListener('window:scroll', ['$event.target.scrollingElement.scrollTop'])
  onScroll(scrollTop: number): void {
    (scrollTop > 100)
      ? this._el.nativeElement.style.background = 'green'
      : this._el.nativeElement.style.background = 'transparent'
  }

  constructor(
    private _el: ElementRef
  ) { }

}
