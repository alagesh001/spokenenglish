import React, { useState } from "react";

const questions = [
  {
    question: "Which word is a preposition? The book is on the table.",
    options: ["Book", "On", "Table", "The"],
    answer: "On",
  },
  {
    question: "Which word is a conjunction? I like tea and coffee.",
    options: ["Like", "Tea", "And", "Coffee"],
    answer: "And",
  },
  {
    question: "Choose the correct preposition: The cat is ___ the box.",
    options: ["In", "And", "But", "Or"],
    answer: "In",
  },
  {
    question: "Choose the correct conjunction: I was tired, ___ I continued working.",
    options: ["On", "But", "Under", "At"],
    answer: "But",
  },
  {
    question: "Choose the correct preposition: The school is ___ the bank.",
    options: ["Near", "And", "But", "Or"],
    answer: "Near",
  },
  {
    question: "Choose the correct conjunction: Would you like tea ___ coffee?",
    options: ["But", "Or", "Because", "So"],
    answer: "Or",
  },
  {
    question: "Choose the correct preposition: I wake up ___ 7 o'clock.",
    options: ["On", "At", "In", "By"],
    answer: "At",
  },
  {
    question: "Which conjunction joins two similar ideas?",
    options: ["And", "But", "Because", "Although"],
    answer: "And",
  },
  {
    question: "Choose the correct preposition: We go to school ___ Monday.",
    options: ["At", "In", "On", "By"],
    answer: "On",
  },
  {
    question: "Choose the correct conjunction: I stayed home ___ it was raining.",
    options: ["And", "But", "Because", "Or"],
    answer: "Because",
  },
  {
    question: "Choose the correct preposition: The children are playing ___ the park.",
    options: ["At", "On", "In", "By"],
    answer: "In",
  },
  {
    question: "Choose the correct conjunction: She is poor ___ honest.",
    options: ["And", "But", "Or", "So"],
    answer: "But",
  },
  {
    question: "Choose the correct preposition: The picture is ___ the wall.",
    options: ["On", "In", "At", "Between"],
    answer: "On",
  },
  {
    question: "Which word is a conjunction? Rahul and Amit are friends.",
    options: ["Rahul", "Amit", "Friends", "And"],
    answer: "And",
  },
  {
    question: "Choose the correct preposition: The dog is hiding ___ the bed.",
    options: ["Under", "And", "But", "Because"],
    answer: "Under",
  },
  {
    question: "Choose the correct conjunction: Hurry up, ___ you will miss the bus.",
    options: ["And", "Or", "But", "Because"],
    answer: "Or",
  },
  {
    question: "Choose the correct preposition: Rahul is sitting ___ his two friends.",
    options: ["Between", "And", "But", "Because"],
    answer: "Between",
  },
  {
    question: "Choose the correct conjunction: I was hungry, ___ I ate a sandwich.",
    options: ["So", "But", "Or", "Although"],
    answer: "So",
  },
  {
    question: "Choose the correct preposition: She walked ___ the room.",
    options: ["Into", "And", "But", "So"],
    answer: "Into",
  },
  {
    question: "Choose the correct conjunction: ___ it was raining, we went outside.",
    options: ["Because", "Although", "And", "Or"],
    answer: "Although",
  },
];

export default function PrepositionsQuestions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const question = questions[currentQuestion];

  const handleAnswer = (option) => {
    if (selectedAnswer) return;

    setSelectedAnswer(option);

    if (option === question.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer("");
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setShowResult(false);
  };

  const getOptionClass = (option) => {
    if (!selectedAnswer) {
      return "bg-white border-gray-200 hover:border-blue-500 hover:bg-blue-50";
    }

    if (option === question.answer) {
      return "bg-green-100 border-green-500 text-green-700";
    }

    if (option === selectedAnswer) {
      return "bg-red-100 border-red-500 text-red-700";
    }

    return "bg-gray-100 border-gray-200 text-gray-400";
  };

  if (showResult) {
    const percentage = Math.round(
      (score / questions.length) * 100
    );

    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-8 text-center">
          <div className="text-6xl mb-5">
            {percentage >= 80
              ? "🎉"
              : percentage >= 50
              ? "👏"
              : "💪"}
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Quiz Completed!
          </h1>

          <p className="text-gray-500 mb-6">
            Great job! Here is your final score.
          </p>

          <div className="bg-blue-50 rounded-2xl p-6 mb-6">
            <p className="text-gray-500 text-sm mb-2">
              Your Score
            </p>

            <p className="text-5xl font-bold text-blue-600">
              {score} / {questions.length}
            </p>

            <p className="text-lg font-semibold text-gray-700 mt-2">
              {percentage}%
            </p>
          </div>

          <button
            onClick={restartQuiz}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition"
          >
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Prepositions & Conjunctions Quiz
          </h1>

          <p className="text-gray-500 mt-2">
            Test your grammar knowledge
          </p>
        </div>

        {/* Quiz Card */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
          {/* Progress */}
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
            </span>

            <span className="text-sm font-semibold text-blue-600">
              {Math.round(progress)}%
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-gray-200 rounded-full mb-8 overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Question */}
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
            {question.question}
          </h2>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className={`w-full text-left text-black p-4 rounded-xl border-2 transition-all duration-200 ${getOptionClass(
                  option
                )}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-semibold text-gray-600">
                    {String.fromCharCode(65 + index)}
                  </span>

                  <span className="font-medium">
                    {option}
                  </span>

                  {selectedAnswer &&
                    option === question.answer && (
                      <span className="ml-auto text-green-600 font-bold">
                        ✓
                      </span>
                    )}

                  {selectedAnswer &&
                    option === selectedAnswer &&
                    option !== question.answer && (
                      <span className="ml-auto text-red-600 font-bold">
                        ✕
                      </span>
                    )}
                </div>
              </button>
            ))}
          </div>

          {/* Feedback */}
          {selectedAnswer && (
            <div
              className={`mt-5 p-4 rounded-xl ${
                selectedAnswer === question.answer
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              <p className="font-semibold">
                {selectedAnswer === question.answer
                  ? "🎉 Correct! Well done."
                  : `❌ Incorrect. The correct answer is "${question.answer}".`}
              </p>
            </div>
          )}

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={!selectedAnswer}
            className={`w-full mt-6 py-3 rounded-xl font-semibold transition ${
              selectedAnswer
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {currentQuestion === questions.length - 1
              ? "Finish Quiz"
              : "Next Question →"}
          </button>
        </div>
      </div>
    </div>
  );
}