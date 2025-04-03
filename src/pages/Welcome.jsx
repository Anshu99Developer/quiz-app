import React, { useState } from "react";
import Option from "../components/Option";
import Button from "../components/Button";

const Welcome = () => {
  const [fullName, setFullName] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleStartQuiz = () => {
    if (!fullName || !selectedTopic) {
      alert("Please fill in all fields before starting the quiz.");
      return;
    }
    console.log("Quiz started with:", { fullName, selectedTopic });
  };

  return (
    <div className="lg:py-[60px] py-[40px]">
      <h1 className="text-[64px] text-[#2E2E2E] font-medium text-center">
        Welcome to <span className="text-primary font-light">QUIZ</span>
        <span className="text-primary font-medium">Mania</span>
      </h1>
      <div className="w-full mx-auto max-w-[600px] mt-7">
        <div className="bg-[#D9D9D94D] px-4 py-3 rounded-lg">
          <p className="text-lg">
            Please read all the rules about this quiz before you start.{" "}
            <span className="text-primary block">Quiz rules</span>
          </p>
        </div>

        <form className="mt-7">
          <div className="flex gap-4 flex-col">
            <label htmlFor="fullName" className="text-base block">
              {" "}
              Full name
            </label>
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full name"
              className="text-xl border border-color_C2C2C2 rounded-lg py-[15px] px-[21px] placeholder:text-placeholderColor bg-transparent"
            />
          </div>

          <div className="mt-8">
            <p className="text-base">Please select topic to continue</p>
            <div className="grid grid-cols-2 gap-6 mt-4">
              {[
                "Javascript Basic",
                "Angular Basic",
                "React.js Advance",
                "Flutter",
              ].map((topic) => (
                <Option
                  key={topic}
                  topic={topic}
                  selectedTopic={selectedTopic}
                  selectHandler={setSelectedTopic}
                />
              ))}
            </div>
          </div>
          <div className="flex mt-10">
            <Button
              title="Start Quiz"
              btnType="fill"
              clickEvent={handleStartQuiz}
              attributes={{
                disabled: !fullName || !selectedTopic,
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Welcome;
