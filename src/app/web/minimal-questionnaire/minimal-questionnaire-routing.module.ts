import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinimalQuestionnaireComponent } from './minimal-questionnaire.component';

const routes: Routes = [
  { path: '', component: MinimalQuestionnaireComponent, data: { title: 'Minimal Questionnaire App' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinimalQuestionnaireRoutingModule { }
