import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appResize]'
})
export class ResizeDirective {

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(innerWidth: number): void {
    (innerWidth <= 575)
      ? this._el.nativeElement.style.background = 'red'
      : this._el.nativeElement.style.background = 'transparent';
  }

  constructor(
    private _el: ElementRef
  ) { }

}
