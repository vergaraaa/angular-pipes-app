import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  // i18n select
  public name: string = 'Edgar';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'you (male)',
    female: 'you (female)',
  };

  changeClient() {
    this.name = 'Melissa';
    this.gender = 'female';
  }
}
