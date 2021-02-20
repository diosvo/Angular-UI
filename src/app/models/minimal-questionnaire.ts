export interface Question {
    id: number;
    questionText?: string;
    options?: Option[];
    length?: number;
}

export interface Option {
    text?: string
}