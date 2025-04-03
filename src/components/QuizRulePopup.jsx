import Popup from "./Popup";

const QuizRulePopup = ({closeHandler}) => {
  return (
    <Popup title="Quiz rules" closeHandler={closeHandler}>
      <div className="mt-8 flex flex-col gap-8">
        <div>
          <div className="py-3 px-6 rounded bg-[#F3F3E9]">
            <h4 className="lg:text-xl text-base font-bold text-black">
              10-Second Timer
            </h4>
          </div>
          <ul className="mt-2">
            <li className="lg:text-xl text-sm text-black">
              Each question comes with a 10-second timer.
            </li>
            <li className="lg:text-xl text-sm text-black">
              If you don’t answer within the time limit, the app will
              automatically move to the next question.
            </li>
          </ul>
        </div>
        <div>
          <div className="py-3 px-6 rounded bg-[#F3F3E9]">
            <h4 className="lg:text-xl text-base font-bold text-black">
              Manual Navigation
            </h4>
          </div>
          <ul className="mt-2">
            <li className="lg:text-xl text-sm text-black">
              You can navigate to the next question manually before the timer
              expires.
            </li>
            <li className="lg:text-xl text-sm text-black">
              Use the "Next" button to move ahead if you’re ready before the
              timer runs out.
            </li>
          </ul>
        </div>
        <div>
          <div className="py-3 px-6 rounded bg-[#F3F3E9]">
            <h4 className="lg:text-xl text-base font-bold text-black">
              Final Score and Performance Message
            </h4>
          </div>
          <ul className="mt-2">
            <li className="lg:text-xl text-sm text-black">
              After all questions are answered, your final score will be
              displayed.
            </li>
            <li className="lg:text-xl text-sm text-black">
              Based on your performance, you will receive a personalized
              message:
              <ul>
                <li>Great job!: If you score above 80%.</li>
                <li>Well done!: If you score between 60% and 80%. </li>
                <li>Keep practicing!: If you score below 60%.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </Popup>
  );
};
export default QuizRulePopup;
