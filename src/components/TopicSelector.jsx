import React from 'react';

const TopicSelector = ({ topics, onSelectTopic }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-6 shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Select a Topic</h2>
      <div className="flex flex-col gap-4">
        {topics.map((topic, index) => (
          <button
            key={index}
            onClick={() => onSelectTopic(topic)}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopicSelector;
