import { Component, Input } from '@angular/core';

@Component({
  selector: 'error-label',
  templateUrl: './error-label.component.html',
  styleUrl: './error-label.component.scss',
})
export class ErrorLabelComponent {
  @Input() errorMessage!: string;
}
