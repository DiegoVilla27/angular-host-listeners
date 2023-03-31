import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appKeyboard]'
})
export class KeyboardDirective {

  @Output() keydownPress: EventEmitter<string> = new EventEmitter<string>();

  @HostListener('window:keydown', ['$event.code'])
  onKeydown(code: string): void {
    this.keydownPress.emit(code);
  }

  constructor() { }

}
