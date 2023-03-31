import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {

  clicks: number = 0;
  @Output() count: EventEmitter<number> = new EventEmitter<number>();

  @HostListener('click')
  onClick(): void {
    this.clicks++;
    this.count.emit(this.clicks);
  }

  constructor() { }

}
