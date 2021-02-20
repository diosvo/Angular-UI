import { Component, OnInit } from '@angular/core';
import { questionList } from 'src/app/configs/minimal-questionnaire/questionList';
import { Question } from 'src/app/models/minimal-questionnaire';

@Component({
  selector: 'app-minimal-questionnaire',
  templateUrl: './minimal-questionnaire.component.html',
  styleUrls: ['./minimal-questionnaire.component.scss']
})
export class MinimalQuestionnaireComponent implements OnInit {
  currentQuestionIndex: number = 0;
  progressValue: number = 0
  questionList = questionList

  constructor() { }

  ngOnInit(): void {}

  get question(): Question {
    return this.questionList[this.currentQuestionIndex]
  }

  onSelect(ans: HTMLDivElement): void { }

  onPrev(): void {}

  onNext(): void {}

}
