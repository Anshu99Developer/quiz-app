import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RadioIcon } from "../assets/Icons";
import Button from "../components/Button";
import { useQuiz } from "../context/QuizContext";

const QuizPage = () => {
  const {
    questions,
    currentQuestionIndex,
    selectedAnswer,
    checkAnswer,
    nextQuestion,
    score,
    timer,
  } = useQuiz();

  const navigate = useNavigate();
  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if (!currentQuestion) return;
  }, [currentQuestionIndex]);

  const handleAnswerSelect = (answer) => {
    checkAnswer(answer); // Use checkAnswer from context
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      nextQuestion();
    } else {
      navigate("/result");
    }
  };

  if (!currentQuestion) return <p>Loading questions...</p>;

  return (
    <div className="flex flex-col items-center lg:p-6 mx-auto">
      {/* Progress Bar */}
      <div className="w-full flex flex-col justify-between mb-[48px]">
        <div className="flex items-center justify-between gap-2">
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
      <h2 className="lg:text-2xl text-xl font-semibold mb-4 text-left">
        {currentQuestion.question}
      </h2>

      {/* Options */}
      <div className="w-full space-y-2 max-w-[800px] mt-6">
        {currentQuestion.options.map((option, index) => (
          <label
            key={index}
            className={`flex items-center lg:text-xl text-base rounded-lg border border-borderColor p-4 cursor-pointer ${
              selectedAnswer === option ? "border-primary" : ""
            }`}
          >
            <input
              type="radio"
              name="answer"
              value={option}
              checked={selectedAnswer === option}
              onChange={() => handleAnswerSelect(option)}
              className="hidden"
            />
            <span
              className={`w-6 h-6 mr-4 flex items-center justify-center border rounded-full ${
                selectedAnswer === option
                  ? "border-primary bg-primary"
                  : "border-color_C2C2C2"
              }`}
            >
              {selectedAnswer === option && <RadioIcon />}
            </span>
            {option}
          </label>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex w-full gap-10 mt-10">
        <Button
          title="Next"
          clickEvent={handleNext}
          className="disabled:opacity-40"
          attributes={{
            disabled: selectedAnswer === null, // Ensures the button is disabled until an answer is selected
          }}
        />
      </div>
    </div>
  );
};

export default QuizPage;
