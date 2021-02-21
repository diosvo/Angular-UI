import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

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

  //  static: true, answers => nativeElement undefined
  @ViewChild('answer', { static: false }) answer?: ElementRef<HTMLDivElement>

  constructor() { }

  ngOnInit(): void {
    this.increaseProgressValue();
  }

  ngAfterViewInit() {
    console.log(this.answer);
}

  get question(): Question {
    return this.questionList[this.currentQuestionIndex]
  }

  increaseProgressValue(): void {
    this.progressValue = (100 * (this.currentQuestionIndex + 1)) / this.questionList.length
  }

  onSelect(answer: HTMLDivElement): void {
    this.answer.nativeElement.childNodes.forEach((node: HTMLDivElement) => {
      if (node.classList && node.classList.contains('selected')) {
        node.classList.remove('selected')
      }
      answer.classList.add('selected');
    });
  }

  onPrev(): void {

  }

  onNext(): void {

  }

}
