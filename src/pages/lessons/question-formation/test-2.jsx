import React, { useState } from "react";

const questions = [
  {
    question: "___ is your name?",
    options: ["What", "Where", "When", "Who"],
    answer: "What",
  },
  {
    question: "___ do you live?",
    options: ["What", "Where", "Why", "Who"],
    answer: "Where",
  },
  {
    question: "___ is your birthday?",
    options: ["Who", "When", "What", "How"],
    answer: "When",
  },
  {
    question: "___ is your best friend?",
    options: ["What", "Where", "Who", "Why"],
    answer: "Who",
  },
  {
    question: "___ are you late?",
    options: ["What", "Why", "Where", "When"],
    answer: "Why",
  },
  {
    question: "___ old are you?",
    options: ["What", "How", "Who", "When"],
    answer: "How",
  },
  {
    question: "___ do you go to school?",
    options: ["Where", "Why", "Who", "What"],
    answer: "Where",
  },
  {
    question: "___ is your favorite color?",
    options: ["Who", "What", "When", "Where"],
    answer: "What",
  },
  {
    question: "___ do you wake up every morning?",
    options: ["What time", "Who", "Where", "Why"],
    answer: "What time",
  },
  {
    question: "___ did you go yesterday?",
    options: ["Who", "Where", "What", "How"],
    answer: "Where",
  },
  {
    question: "___ are you going to the market?",
    options: ["Why", "Who", "When", "What"],
    answer: "Why",
  },
  {
    question: "___ did you meet at the party?",
    options: ["Who", "Where", "When", "How"],
    answer: "Who",
  },
  {
    question: "___ does this book cost?",
    options: ["How much", "How many", "What", "Where"],
    answer: "How much",
  },
  {
    question: "___ students are there in your class?",
    options: ["How much", "How many", "How", "What"],
    answer: "How many",
  },
  {
    question: "___ do you travel to work?",
    options: ["How", "Who", "What", "When"],
    answer: "How",
  },
  {
    question: "___ did you start learning English?",
    options: ["When", "Who", "Where", "What"],
    answer: "When",
  },
  {
    question: "___ is knocking at the door?",
    options: ["Who", "What", "Where", "Why"],
    answer: "Who",
  },
  {
    question: "___ are you doing right now?",
    options: ["What", "Where", "Who", "When"],
    answer: "What",
  },
  {
    question: "___ did you solve the problem?",
    options: ["How", "Who", "Where", "When"],
    answer: "How",
  },
  {
    question: "___ kind of music do you like?",
    options: ["What", "Who", "Where", "Why"],
    answer: "What",
  },
];
export default function WhQuiz() {
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
            Wh- Questions Quiz
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