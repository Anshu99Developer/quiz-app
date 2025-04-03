import { RadioIcon } from "../assets/Icons";

const Option = ({ topic, selectedTopic, selectHandler }) => {
  return (
    <div>
      <label
        key={topic?.id}
        className={`flex items-center text:text-xl text-base rounded-lg border p-4 cursor-pointer ${
          selectedTopic === topic?.id ? "border-primary" : " border-borderColor"
        }`}
      >
        <input
          type="radio"
          name="topic?.id"
          value={topic?.id}
          checked={selectedTopic === topic?.id}
          onChange={(e) => selectHandler(e.target.value)}
          className="hidden"
        />
        <span
          className={`w-6 h-6 mr-4 flex items-center justify-center border rounded-full ${
            selectedTopic === topic?.id
              ? "border-primary bg-primary"
              : "border-color_C2C2C2"
          }`}
        >
          {selectedTopic === topic?.id && <RadioIcon />}
        </span>
        {topic?.name}
      </label>
    </div>
  );
};

export default Option;
