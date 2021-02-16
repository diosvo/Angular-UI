import { Question } from 'src/app/models/minimal-questionnaire';

export const questionList: Question[] = [
    {
        id: 1,
        questionText: 'What is you skill level?',
        options: [
            { text: 'Beginner' },
            { text: 'Experience' },
            { text: 'Professional' },
        ]
    },
    {
        id: 2,
        questionText: 'When Lord descends, he comes for......?',
        options: [
            { text: 'Deliver the pious people' },
            { text: 'Annihilate the miscreants' },
            { text: 'All of the above' },
        ]
    },
    {
        id: 3,
        questionText: 'What is the symptom of soul\'s presence in the body?',
        options: [
            { text: 'Mind' },
            { text: 'Intelligence' },
            { text: 'Ego' },
        ]
    },
    {
        id: 4,
        questionText: 'What is the capital of VietNam?',
        options: [
            { text: 'Ha Noi' },
            { text: 'Ho Chi Minh' },
            { text: 'Bien Hoa' },
        ]
    },
]