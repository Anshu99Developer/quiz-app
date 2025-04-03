import React from "react";
import { useNavigate } from "react-router-dom";
import { GreatWork, KeepTrying } from "../assets/Icons";
import Button from "../components/Button";
import { useQuiz } from "../context/QuizContext";

const ResultPage = () => {
  const { score, questions, correctAnswers, incorrectAnswers, unanswered } =
    useQuiz();

  const totalQuestions = questions?.length;

  const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);
  const isPassed = scorePercentage >= 50;
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      {/* Result Icon */}
      <div className={`mb-6 ${isPassed ? "text-green-500" : "text-red-500"}`}>
        {isPassed ? <GreatWork /> : <KeepTrying />}
      </div>

      {/* Result Message */}
      {isPassed ? (
        <div>
          <h2 className="lg:text-[40px] text-2xl font-light mt-4 tracking-[0.5em]  leading-none">
            CONGRATULATIONS!
          </h2>
          <p className="text-gray-600 lg:text-xl text-sm mt-4 font-medium">
            You successfully completed the Quiz and holds
          </p>
        </div>
      ) : (
        <div>
          <p className="text-gray-600 lg:text-xl text-sm font-medium mb-6">
            You successfully completed the Quiz but you need to
          </p>
          <h2 className="lg:text-[40px] text-2xl font-light mt-4 tracking-[0.5em] leading-none text-center">
            KEEP <br />
            PRACTICING!
          </h2>
        </div>
      )}
      {/* <h2 className="lg:text-[40px] text-2xl font-semibold mt-4 tracking-[0.5em]">
        {isPassed ? "CONGRATULATIONS!" : "KEEP PRACTICING!"}
      </h2>
      <p className="text-gray-600 text-lg mt-2">
        ? "You successfully completed the quiz!" : "You need to keep
        practicing!"}
      </p> */}

      <div className=" border border-borderColor py-6 lg:px-7 px-6 rounded-lg text-center my-10">
        <h4 className="lg:text-2xl text-lg font-medium">
          Out of {totalQuestions} Questions
        </h4>
        <div className="lg:mt-6 mt-4 flex gap-2">
          {correctAnswers && (
            <p className="text-green-500 text-base">
              {correctAnswers} Correct
            </p>
          )}
          {incorrectAnswers && (
            <p className="text-red-500 text-base">
              {incorrectAnswers} Incorrect
            </p>
          )}
          {unanswered && (
            <p className="text-gray-500 text-base">
              {unanswered} Not Answered
            </p>
          )}
        </div>
      </div>

      {/* Retake Button */}
      <Button
        btnType="transparent"
        clickEvent={() => {
          navigate("/");
        }}
        title="Retake Quiz"
      />
    </div>
  );
};

export default ResultPage;
