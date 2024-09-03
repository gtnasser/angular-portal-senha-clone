import { Component } from '@angular/core';
import { SpinnerService } from '../../components/spinner/spinner.service';

@Component({
  selector: 'app-portal-senha',
  standalone: true,
  imports: [],
  templateUrl: './portal-senha.component.html',
  styleUrl: './portal-senha.component.scss'
})
export class PortalSenhaComponent {

  constructor(
    public spinnerService: SpinnerService
  ) {
  }

  validate() {

    this.spinnerService.tempShow.subscribe((x) => {
      console.log(x);
    });

    return false
  }

}
