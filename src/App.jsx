import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QuizProvider } from "./context/QuizContext";
import QuizPage from "./pages/QuizPage";
import Welcome from "./pages/Welcome";
import ResultPage from "./pages/ResultPage";
import { AppHeader } from "./components/AppHeader";

function App() {
  return (
    <BrowserRouter>
      <QuizProvider>
        <span className="backdrop-panel bg-backdropColor w-full h-full fixed z-40 top-0 left-0"></span>
        <AppHeader />
        <div className="max-w-[800px] w-full mx-auto px-[18px]">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="quiz" element={<QuizPage />} />
            <Route path="result" element={<ResultPage />} />
          </Routes>
        </div>
      </QuizProvider>
    </BrowserRouter>
  );
}

export default App;
