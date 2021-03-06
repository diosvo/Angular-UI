import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiquidMenuComponent } from './liquid-menu.component';

const routes: Routes = [
  { path: '', component: LiquidMenuComponent, data: { title: 'Liquid Menu Interaction' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiquidMenuRoutingModule { }
