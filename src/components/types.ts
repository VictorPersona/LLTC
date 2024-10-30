export interface quizQuestionData {
  question: string
  type: 'MCQ' | 'TF'
  options?: string[]
  correctAnswer: boolean | string
}
