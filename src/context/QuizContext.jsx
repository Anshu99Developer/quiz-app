import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { quizData } from "../assets/data";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [fullName, setFullName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [unanswered, setUnanswered] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let countdown;
    if (selectedCategory && questions.length > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(countdown);
  }, [selectedCategory, currentQuestionIndex]);

  useEffect(() => {
    if (timer === 0 && questions.length > 0) {
      setUnanswered((prev) => prev + 1);
      nextQuestion();
    }
  }, [timer]);

  const startQuiz = (name, categoryId) => {
    setFullName(name);
    const categoryData = quizData.categories.find(
      (cat) => cat.id === categoryId
    );

    if (categoryData && categoryData.questions.length > 0) {
      setSelectedCategory(categoryData);
      setQuestions(categoryData.questions);
      setCurrentQuestionIndex(0);
      setTimer(categoryData.questions[0].timeLimit);
      setScore(0);
      setUnanswered(0);
      navigate("/quiz");
    } else {
      alert("No questions available for this category!");
    }
  };

  const checkAnswer = (answer) => {
    setSelectedAnswer(answer);
  
    if (answer == questions[currentQuestionIndex].correctAnswer) {
      setScore((prev) => prev + 1);
    }
  
    setTimeout(() => {
      nextQuestion();
    }, 500);
  };
  

  const nextQuestion = () => {
    if (questions.length === 0) return;

    setCurrentQuestionIndex((prevIndex) => {
      if (prevIndex < questions.length - 1) {
        setTimer(questions[prevIndex + 1].timeLimit);
        setSelectedAnswer(null);
        return prevIndex + 1;
      } else {
        navigate("/result");
        return prevIndex; // Keep index the same after navigation
      }
    });
  };

  return (
    <QuizContext.Provider
      value={{
        fullName,
        selectedCategory,
        questions,
        currentQuestionIndex,
        timer,
        selectedAnswer,
        setSelectedAnswer,
        score,
        unanswered,
        checkAnswer,
        startQuiz,
        nextQuestion,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  return useContext(QuizContext);
};
