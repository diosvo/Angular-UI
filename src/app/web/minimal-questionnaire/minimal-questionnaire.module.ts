import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinimalQuestionnaireRoutingModule } from './minimal-questionnaire-routing.module';
import { MinimalQuestionnaireComponent } from './minimal-questionnaire.component';


@NgModule({
  declarations: [MinimalQuestionnaireComponent],
  imports: [
    CommonModule,
    MinimalQuestionnaireRoutingModule
  ]
})
export class MinimalQuestionnaireModule { }
