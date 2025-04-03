import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";

const ResultPage = () => {
  const { score, unanswered, questions, fullName } = useQuiz();
  const navigate = useNavigate();

  const totalQuestions = questions.length;
  const feedback =
    score >= totalQuestions * 0.8
      ? "Great job! 🎉"
      : score >= totalQuestions * 0.5
      ? "Good effort! 👍"
      : "Keep practicing! 💪";

  return (
    <div className="result-container">
      <h2>Quiz Completed 🎯</h2>
      <p className="username">Well done, {fullName}!</p>
      <h3>
        Your Score: {score} / {totalQuestions}
      </h3>
      <p>Unanswered Questions: {unanswered}</p>
      <p className="feedback">{feedback}</p>

      <button className="retry-btn" onClick={() => navigate("/")}>
        Try Again 🔄
      </button>
    </div>
  );
};

export default ResultPage;
