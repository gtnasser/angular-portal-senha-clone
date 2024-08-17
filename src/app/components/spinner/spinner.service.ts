import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private show: boolean = false;

  constructor() { }

  setShow(status: boolean) {
    this.show = status;

    if (this.show) {
      setTimeout(() => {
        this.show = false
      },
        3000)
    }

  }

  getShow(): boolean {
    return this.show;
  }

}
