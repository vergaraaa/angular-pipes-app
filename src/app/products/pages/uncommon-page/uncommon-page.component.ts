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

  // i18n plural
  public clients: string[] = [
    'maria',
    'pedro',
    'fernando',
    'hernando',
    'melissa',
    'eduardo',
    'natalia',
  ];
  public clientsMap = {
    '=0': 'No clients waiting',
    '=1': 'We have 1 client waiting',
    other: 'We have # clients waiting',
  };

  unqueueClient() {
    this.clients.shift();
  }
}
