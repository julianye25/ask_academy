import React from 'react';

const ResultsCard = ({ question, answer }) => {
  const isCorrect = answer === question.correctAnswer;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
      <p className="text-lg font-semibold mb-2 text-gray-800">
        <span className="text-blue-500">Q:</span> {question.question}
      </p>
      <p
        className={`mb-2 text-gray-700 ${
          isCorrect ? 'text-green-600 font-medium' : 'text-red-600 font-medium'
        }`}
      >
        Your Answer: {answer} - {isCorrect ? 'Correct!' : 'Incorrect!'}
      </p>
      {!isCorrect && (
        <p className="mb-2 text-gray-700">
          <strong>Correct Answer:</strong> {question.correctAnswer}
        </p>
      )}
      <p className="italic text-gray-600">
        <strong>Explanation:</strong> {question.explanation}
      </p>
    </div>
  );
};

export default ResultsCard;
