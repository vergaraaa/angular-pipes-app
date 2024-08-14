import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

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
    'eduardo',
    'melissa',
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

  // keyvalue pipe
  public person = {
    name: 'edgar',
    age: 23,
    address: 'my address',
  };

  // async pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('data in promise');
      console.log('data in promise');
    }, 3500);
  });
}
