import { Component, ViewEncapsulation } from '@angular/core';
import { NgIf } from '@angular/common';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [NgIf],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SpinnerComponent {

  constructor(public spinner: SpinnerService) { }

}
