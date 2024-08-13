import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';

@NgModule({
  exports: [ButtonModule, CardModule, MenubarModule, PanelModule],
})
export class PrimeNgModule {}
