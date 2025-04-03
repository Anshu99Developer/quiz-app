export const quizData = {
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
            "<script name='script.js'>",
            "<script href='script.js'>",
            "<script src='script.js'>",
            "<script file='script.js'>",
          ],
          correctAnswer: "<script src='script.js'>",
          timeLimit: 10,
        },
        {
          id: "q2",
          question: "Which company developed JavaScript?",
          options: ["Microsoft", "Netscape", "Google", "Mozilla"],
          correctAnswer: "Netscape",
          timeLimit: 10,
        },
      ],
    },
    {
      id: "angular_basics",
      name: "Angular Basics",
      questions: [
        {
          id: "q7",
          question:
            "What is the main language used to develop Angular applications?",
          options: ["Java", "TypeScript", "JavaScript", "Dart"],
          correctAnswer: "TypeScript",
          timeLimit: 10,
        },
        {
          id: "q8",
          question:
            "Which directive is used for two-way data binding in Angular?",
          options: ["*ngFor", "*ngIf", "[(ngModel)]", "(click)"],
          correctAnswer: "[(ngModel)]",
          timeLimit: 10,
        },
      ],
    },
    {
      id: "react_advance",
      name: "React.js Advance",
      questions: [
        {
          id: "q9",
          question:
            "Which hook is used to manage state in functional components?",
          options: [
            "useEffect",
            "useState",
            "useReducer",
            "useMemo",
          ],
          correctAnswer: "useState",
          timeLimit: 10,
        },
        {
          id: "q10",
          question: "What is React Fiber?",
          options: [
            "A new rendering engine in React",
            "A CSS framework for React",
            "A database for React applications",
            "A Redux alternative",
          ],
          correctAnswer: "A new rendering engine in React",
          timeLimit: 10,
        },
      ],
    },
    {
      id: "flutter",
      name: "Flutter",
      questions: [
        {
          id: "q11",
          question:
            "What language is primarily used to develop Flutter applications?",
          options: ["Java", "Kotlin", "Dart", "Swift"],
          correctAnswer: "Dart",
          timeLimit: 10,
        },
        {
          id: "q12",
          question: "Which widget is used to create a button in Flutter?",
          options: ["Text", "Row", "Column", "ElevatedButton"],
          correctAnswer: "ElevatedButton",
          timeLimit: 10,
        },
      ],
    },
  ],
};
