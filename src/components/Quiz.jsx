import React, { useState } from 'react';
import { questions } from '../db/questions';
import TopicSelector from './TopicSelector';
import QuestionCard from './QuestionCard';
import ResultsCard from './ResultsCard';
import PaginationControls from './PaginationControls';
import QuizSummary from './QuizSummary';

const QuizApp = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [currentResult, setCurrentResult] = useState(0);

  const handleTopicSelection = (topic) => {
    setSelectedTopic(topic);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setShowSummary(false);
    setCurrentResult(0);
  };

  const filteredQuestions = selectedTopic
    ? questions.filter((q) => q.topic === selectedTopic).slice(0, 5)
    : [];

  const handleAnswer = (selectedOption) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = selectedOption;
    setAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestartQuiz = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResults(false);
    setShowSummary(false);
    setCurrentResult(0);
  };

  const handleReturnToTopics = () => {
    setSelectedTopic(null);
  };

  const handleShowSummary = () => {
    setShowSummary(true);
    setShowResults(false);
  };

  const handleNextResult = () => {
    if (currentResult < filteredQuestions.length - 1) {
      setCurrentResult(currentResult + 1);
    }
  };

  const handlePreviousResult = () => {
    if (currentResult > 0) {
      setCurrentResult(currentResult - 1);
    }
  };

  const topics = ['Programming', 'Math', 'General Knowledge'];

  const correctAnswers = answers.filter(
    (answer, index) => answer === filteredQuestions[index]?.correctAnswer,
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-white shadow-md py-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-blue-600">
            Welcome to Quiz App
          </h1>
          <p className="text-gray-600 mt-2">
            Test your knowledge on various topics!
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mt-6">
        {!selectedTopic ? (
          <TopicSelector topics={topics} onSelectTopic={handleTopicSelection} />
        ) : !showResults && !showSummary ? (
          <QuestionCard
            question={filteredQuestions[currentQuestion]}
            currentQuestion={currentQuestion}
            onAnswer={handleAnswer}
            onNext={handleNextQuestion}
            answer={answers[currentQuestion]}
            totalQuestions={filteredQuestions.length}
          />
        ) : showResults ? (
          <>
            <ResultsCard
              question={filteredQuestions[currentResult]}
              answer={answers[currentResult]}
            />
            <PaginationControls
              onPrevious={handlePreviousResult}
              onNext={handleNextResult}
              onRestart={handleRestartQuiz}
              currentIndex={currentResult}
              totalItems={filteredQuestions.length}
            />
            <button
              onClick={handleShowSummary}
              className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
            >
              View Summary
            </button>
          </>
        ) : (
          <QuizSummary
            totalQuestions={filteredQuestions.length}
            correctAnswers={correctAnswers}
            onReturnToTopics={handleReturnToTopics}
          />
        )}
      </div>
    </div>
  );
};

export default QuizApp;
