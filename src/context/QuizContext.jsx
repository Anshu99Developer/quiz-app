import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const QuizContext = createContext();

const quizData = {
  categories: [
    {
      id: "js_basics",
      name: "JavaScript Basics",
      questions: [
        {
          id: "q1",
          question:
            "What is the correct syntax for referring to an external script called 'script.js'?",
          options: [
            "A. <script name='script.js'>",
            "B. <script href='script.js'>",
            "C. <script src='script.js'>",
            "D. <script file='script.js'>",
          ],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q2",
          question: "Which company developed JavaScript?",
          options: ["A. Microsoft", "B. Netscape", "C. Google", "D. Mozilla"],
          correctAnswer: "B",
          timeLimit: 10,
        },
      ],
    },
  ],
};

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
    if (timer === 0) {
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
      // ✅ Check if questions exist
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
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore((prev) => prev + 1);
    }
    setTimeout(() => {
      nextQuestion();
    }, 500);
  };

  const nextQuestion = () => {
    if (questions.length === 0) return; // ✅ Prevent redirect if no questions are loaded

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setTimer(questions[currentQuestionIndex + 1].timeLimit);
      setSelectedAnswer(null);
    } else {
      navigate("/result"); // ✅ Only navigate after the last question is answered
    }
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
