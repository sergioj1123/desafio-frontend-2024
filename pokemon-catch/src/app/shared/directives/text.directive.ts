import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[text]',
})
export class TextDirective {
  constructor() {}

  @HostListener('keyup', ['$event'])
  onKeyUp($event: any) {
    let value = $event.target.value;
    value = value.replace(/[^a-zA-Z ]/g, '');
    $event.target.value = value;
  }
}
