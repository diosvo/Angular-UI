import { Component, OnInit } from '@angular/core';
import { questionList } from 'src/app/configs/minimal-questionnaire/questionList';

@Component({
  selector: 'app-minimal-questionnaire',
  templateUrl: './minimal-questionnaire.component.html',
  styleUrls: ['./minimal-questionnaire.component.scss']
})
export class MinimalQuestionnaireComponent implements OnInit {
  questionList = Array(questionList[0])
  constructor() { }

  ngOnInit(): void {
    console.log(this.questionList)
  }

}
