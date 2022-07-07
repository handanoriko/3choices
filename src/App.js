import { Question } from "./components/Question.jsx";
import { Answer } from "./components/Answer.jsx";
import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const questions = [
    {
      questionText: "どんなパソコンをお探しですか？",
      answerOptions: [
        { answerText: "ノートブックパソコン", isCorrect: true },
        { answerText: "デスクトップパソコン", isCorrect: false },
        { answerText: "タブレット", isCorrect: false }
      ]
    },
    {
      questionText: "ご利用のシーンを教えてください。",
      answerOptions: [
        { answerText: "インターネット閲覧・動画視聴", isCorrect: false },
        { answerText: "会議やビジネスで使用", isCorrect: false },
        {
          answerText: "動画編集などの<br>クリエイティブな作業",
          isCorrect: true
        },
        { answerText: "PCゲーム", isCorrect: true }
      ]
    },
    {
      questionText: "ご希望のCPUを教えてください。",
      answerOptions: [
        { answerText: "Corei3～ 4GB～", isCorrect: false },
        {
          answerText: "Corei3～ 8GB～ ～1.8kg<br>（デスクトップの場合はなし）",
          isCorrect: true
        },
        { answerText: "Corei7～ 16GB～", isCorrect: false },
        { answerText: "Corei5～ 16GB～ GTX1050～", isCorrect: false }
      ]
    },
    {
      questionText: "ご希望の予算を教えてください。",
      answerOptions: [
        { answerText: "～50,000円", isCorrect: false },
        { answerText: "50,001～100,000円", isCorrect: true },
        { answerText: "100,001～150,000円", isCorrect: false },
        { answerText: "150,001円～", isCorrect: false }
      ]
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      alert("正解です");
      setScore(score + 1);
    } else {
      alert("不正解です");
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="App">
      {showScore ? (
        <p>
          お疲れ様でした!<br></br>
          <span class="correct">3問中{score}問</span>正解です
        </p>
      ) : (
        <Answer
          handleAnswerButtonClick={handleAnswerButtonClick}
          questions={questions}
          currentQuestion={currentQuestion}
        />
      )}
    </div>
  );
}
