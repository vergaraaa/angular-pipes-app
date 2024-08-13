import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  public nameLower: string = 'edgar';
  public nameUpper: string = 'EDGAR';
  public fullName: string = 'EdGar vERGara';

  public customDate: Date = new Date();
}
