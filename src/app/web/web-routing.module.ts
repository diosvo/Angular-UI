import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'minimal-questionnaire',
    loadChildren: () => import('./minimal-questionnaire/minimal-questionnaire.module').then(m => m.MinimalQuestionnaireModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
