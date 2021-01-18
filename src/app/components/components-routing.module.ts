import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'navbar',
    loadChildren: () => import('./navbar/navbar.module').then(m => m.NavbarModule),
  },
  {
    path: 'liquid-menu',
    loadChildren: () => import('./liquid-menu/liquid-menu.module').then(m => m.LiquidMenuModule),
  },
  {
    path: 'dynamic-carousel',
    loadChildren: () => import('./carousel/carousel.module').then(m => m.CarouselModule),
  },
  {
    path: 'animated-counter-card',
    loadChildren: () => import('./card/card.module').then(m => m.CardModule),
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
