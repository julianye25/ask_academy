import React from 'react';

const PaginationControls = ({
  onPrevious,
  onNext,
  onRestart,
  currentIndex,
  totalItems,
}) => {
  return (
    <div className="flex justify-between items-center mt-6">
      <button
        onClick={onPrevious}
        disabled={currentIndex === 0}
        className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 disabled:opacity-50"
      >
        Previous
      </button>
      <button
        onClick={onNext}
        disabled={currentIndex === totalItems - 1}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        Next
      </button>
      <button
        onClick={onRestart}
        className="ml-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default PaginationControls;
