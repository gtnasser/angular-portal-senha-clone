import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private show: boolean = false;

  constructor() { }

  setShow(status: boolean) {
    this.show = status;
  }

  getShow(): boolean {
    return this.show;
  }

  // demo: show spinner for 3000ms and hide again

  public tempShow = new Observable((subscriber) => {
    this.setShow(true)
    subscriber.next('spinner on')
    setTimeout(() => {
      subscriber.next('spinner off')
      this.setShow(false)
    }, 3000)
  })

}
