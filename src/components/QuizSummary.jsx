import React from 'react';

const QuizSummary = ({ totalQuestions, correctAnswers, onReturnToTopics }) => {
  const performanceMessage =
    correctAnswers / totalQuestions >= 0.8
      ? 'Great job! You really know your stuff!'
      : correctAnswers / totalQuestions >= 0.5
      ? 'Good effort! Keep practicing to improve.'
      : "Don't give up! Practice makes perfect.";

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Quiz Summary</h2>
      <p className="text-lg text-gray-700 mb-2">
        You answered <strong>{correctAnswers}</strong> out of{' '}
        <strong>{totalQuestions}</strong> questions correctly.
      </p>
      <p className="text-gray-600 italic mb-4">{performanceMessage}</p>
      <button
        onClick={onReturnToTopics}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Return to Topic Menu
      </button>
    </div>
  );
};

export default QuizSummary;
