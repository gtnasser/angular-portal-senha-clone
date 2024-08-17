import { Component, ViewEncapsulation } from '@angular/core';
import { SpinnerService } from './spinner.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [NgIf],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SpinnerComponent {

  constructor(public spinner: SpinnerService) {
  }

}
