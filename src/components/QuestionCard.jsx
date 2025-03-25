import React from 'react';

const QuestionCard = ({
  question,
  currentQuestion,
  onAnswer,
  onNext,
  answer,
  totalQuestions,
}) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">
        Question {currentQuestion + 1} of {totalQuestions}:
      </h2>
      <p className="text-gray-700 mb-6">{question.question}</p>
      <div className="flex flex-col gap-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            disabled={answer !== undefined}
            className={`py-2 px-4 rounded ${
              answer === option
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <br />
      <button
        onClick={onNext}
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        {currentQuestion < totalQuestions - 1 ? 'Next' : 'Show Results'}
      </button>
    </div>
  );
};

export default QuestionCard;
