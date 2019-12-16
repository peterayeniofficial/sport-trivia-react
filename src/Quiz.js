import React, { Component } from 'react';
import { questions } from './Questions';

class Quiz extends Component {
    btn = React.createRef();
    state = {
        questions: questions,
        index: 0,
        score: 0, 
        defaultClass: 'answer-button__default',
        disabled: false,
        correct: '',
        incorrect: ''
      };

      nextQuestion(e)  {
          let i = this.state.index 
          if ( i < this.state.questions.length - 1) {
              i++
          }
          
          this.setState({
              index: i,
              disabled: false,
              defaultClass: this.state.defaultClass,
              correct: '',
              incorrect: ''

          })
      }

      checkAnswer(q) {
        console.log(q)
        
       
    
        let currentAnswer = this.state.questions[this.state.index].correct_answer
        console.log('current Ans:', currentAnswer)
        let score = this.state.score
        if (q.target.innerText === currentAnswer) {
           score++
        //    q.target.className = 'answer-button__correct'
           this.setState({
            score: score,
            disabled: true,
            correct: 'answer-button__correct', 
            defaultClass: ''
        })
        }else {
            this.setState({
             
                incorrect: 'answer-button__incorrect', 
                defaultClass: '',
                disabled: true,
                score: score,
                correct: 'answer-button__correct'
            })
        }

       
   
      }
      
      renderButton() {
        if (this.state.index < this.state.questions.length - 1) {
            return <button className="next-button" onClick={ event => this.nextQuestion()} >Next</button>
        }else {
            return <button className="next-button">Finish</button>
        }
    }
    
    render() {
        const {questions, index, correct, incorrect } = this.state
        const currentQuestion = questions[index]
        
        return (
            <div className="quiz-page">
            <div className="quiz-content">
                <div className="question-meta">
                    <div className="time-container"><h3>30</h3></div>
                    <div className="progress-container">
                        <p>Question: {index + 1} of {questions.length}</p>
                        <progress value={index + 1} max={questions.length} className="progress"></progress>
                    </div>
                </div>
                <div className="display-content">
                    <p>{currentQuestion.question}</p>
                </div>
                <div className="answers-button">
                {
                    currentQuestion.answers.map((q, i) => (
                    <button 
                        disabled={this.state.disabled} 
                        ref="btn" key={i} id={"answer"+i} 
                        className={`${ q ===  currentQuestion.correct_answer ? correct : incorrect } answer-button__default`} 
                        onClick={ (event) => this.checkAnswer(event)}>
                            {q}
                        </button>
                    ))
                }
                </div>
                {this.renderButton()}
            </div>
        </div>
        );
    }
}

export default Quiz;