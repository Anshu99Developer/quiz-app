import React, { useState } from "react";
import Button from "../components/Button";
import Option from "../components/Option";
import QuizRulePopup from "../components/QuizRulePopup";
import { useQuiz } from "../context/QuizContext";

const quizCategory = [
  { id: "js_basics", name: "Javascript Basic" },
  { id: "angular_basics", name: "Angular Basic" },
  { id: "react_advance", name: "React.js Advance" },
  { id: "flutter", name: "Flutter" },
];
const Welcome = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    selectedTopic: "",
  });
  const [rulesPopup, setRulesPopup] = useState(false);
  const { startQuiz } = useQuiz(); // ✅ Get startQuiz from context

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleStartQuiz = () => {
    const { fullName, selectedTopic } = formData;
    if (!fullName || !selectedTopic) {
      alert("Please fill in all fields before starting the quiz.");
      return;
    }
    startQuiz(fullName, selectedTopic); // ✅ Store in context and redirect
  };

  const handleRulesPopup = () => {
    setRulesPopup(!rulesPopup);
  };

  return (
    <div className="lg:py-[60px] py-[40px]">
      <h1 className="lg:text-[64px] text-[32px] text-[#2E2E2E] font-medium text-center">
        Welcome to <span className="text-primary font-light">QUIZ</span>
        <span className="text-primary font-medium">Mania</span>
      </h1>
      <div className="w-full mx-auto max-w-[600px] mt-7">
        <div className="bg-[#D9D9D94D] px-4 py-3 rounded-lg">
          <p className="lg:text-lg text-sm">
            Please read all the rules about this quiz before you start.{" "}
            <span
              className="text-primary block cursor-pointer"
              onClick={handleRulesPopup}
            >
              Quiz rules
            </span>
          </p>
        </div>

        <form className="mt-7">
          <div className="flex gap-4 flex-col">
            <label htmlFor="fullName" className="text-base block">
              Full name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              placeholder="Full name"
              className="lg:text-xl text-base border border-color_C2C2C2 rounded-lg py-[15px] px-[21px] placeholder:text-placeholderColor bg-transparent"
            />
          </div>

          <div className="mt-8">
            <p className="text-base">Please select topic to continue</p>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-4 mt-4">
              {quizCategory.map((topic) => (
                <Option
                  key={topic?.id}
                  topic={topic}
                  selectedTopic={formData.selectedTopic}
                  selectHandler={(value) =>
                    handleInputChange("selectedTopic", value)
                  }
                />
              ))}
            </div>
          </div>
          <div className="flex mt-10">
            <Button
              title="Start Quiz"
              btnType="fill"
              clickEvent={handleStartQuiz}
              className="disabled:opacity-40"
              attributes={{
                disabled:
                  (!formData.fullName || !formData.selectedTopic) && true,
              }}
            />
          </div>
        </form>
      </div>
      {rulesPopup && <QuizRulePopup closeHandler={handleRulesPopup} />}
    </div>
  );
};

export default Welcome;
