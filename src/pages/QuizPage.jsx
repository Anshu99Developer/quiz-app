import React, { useEffect, useState } from "react";
import { useQuiz } from "../context/QuizContext";

const QuizPage = () => {
  const { questions, currentQuestionIndex, setSelectedAnswer, nextQuestion } =
    useQuiz();
  const [timer, setTimer] = useState(10);
  const currentQuestion = questions[currentQuestionIndex];

  //   useEffect(() => {
  //     // Reset timer on new question
  //     setTimer(10);

  //     const countdown = setInterval(() => {
  //       setTimer((prev) => {
  //         if (prev === 1) {
  //           clearInterval(countdown);
  //           nextQuestion(); // Auto-move to next question
  //         }
  //         return prev > 0 ? prev - 1 : 0;
  //       });
  //     }, 1000);

  //     return () => clearInterval(countdown); // Cleanup when component unmounts or question changes
  //   }, [currentQuestionIndex, nextQuestion]);

  //   useEffect(() => {
  //     setTimer(10); // Reset timer when the question changes

  //     const countdown = setInterval(() => {
  //       setTimer((prev) => (prev > 0 ? prev - 1 : 0));
  //     }, 1000);

  //     return () => clearInterval(countdown); // Cleanup on unmount or question change
  //   }, [currentQuestionIndex]);

  useEffect(() => {
    setTimer(10); // Reset timer when the question loads

    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown); // Cleanup when component unmounts or question changes
  }, []); // ⬅️ Empty dependency array ensures it runs only once

  if (!currentQuestion) return <p>No questions available.</p>;

  return (
    <div className="flex flex-col items-center p-6 max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="w-full flex justify-between items-center mb-4">
        <div>
          <span className="text-2xl font-medium">
            <span className="text-primary">{currentQuestionIndex + 1}</span> /{" "}
            {questions.length}
          </span>
          <span className="text-2xl text-[#2E2E2E] font-medium px-3.5 py-2 rounded-lg bg-light">
            0:{timer.toString().padStart(2, "0")}
          </span>
        </div>
        <div className="bg-light h-3 flex-grow mt-3">
          <span
            className="bg-primary h-3 block"
            style={{
              width: `${
                ((currentQuestionIndex + 1) / questions.length) * 100
              }%`,
            }}
          ></span>
        </div>
      </div>

      {/* Question */}
      <h2 className="text-lg font-semibold mb-4">{currentQuestion.question}</h2>

      {/* Options */}
      <div className="w-full space-y-2">
        {currentQuestion.options.map((option, index) => (
          <label
            key={index}
            className="block p-3 border rounded cursor-pointer hover:bg-gray-100"
          >
            <input
              type="radio"
              name="answer"
              className="mr-2"
              onChange={() => setSelectedAnswer(option)}
            />
            {option}
          </label>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex w-full justify-between mt-6">
        <button
          className="bg-pink-500 text-white px-6 py-2 rounded"
          onClick={nextQuestion}
        >
          Next
        </button>
        <button className="text-gray-500 px-6 py-2" onClick={nextQuestion}>
          Skip this question
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
