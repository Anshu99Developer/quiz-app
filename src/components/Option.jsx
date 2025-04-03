const Option = ({ topic, selectedTopic, selectHandler }) => {
  return (
    <div>
      <label
        key={topic?.id}
        className="flex items-center text-xl rounded-lg border border-primary p-4 cursor-pointer"
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
          {selectedTopic === topic?.id && (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="12" fill="#B92B5D" />
              <path
                d="M7 12.75L10.125 15.875L17 9"
                stroke="white"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </span>
        {topic?.name}
      </label>
    </div>
  );
};

export default Option;
