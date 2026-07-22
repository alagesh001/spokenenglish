import React, { useState } from "react";

const questions = [
  {
    question: "Choose the correct modal: I ___ swim very well.",
    options: ["can", "should", "must", "would"],
    answer: "can",
  },
  {
    question: "Choose the correct modal: ___ you help me with this bag?",
    options: ["Could", "Must", "Should", "Would"],
    answer: "Could",
  },
  {
    question: "Choose the correct modal: I ___ call you tomorrow.",
    options: ["will", "could", "should", "must"],
    answer: "will",
  },
  {
    question: "Choose the correct modal: ___ you like some tea?",
    options: ["Would", "Must", "Can", "Should"],
    answer: "Would",
  },
  {
    question: "Choose the correct modal: You ___ study regularly if you want to improve.",
    options: ["should", "would", "could", "can"],
    answer: "should",
  },
  {
    question: "Choose the correct modal: You ___ wear a seat belt while driving.",
    options: ["must", "could", "would", "can"],
    answer: "must",
  },
  {
    question: "Choose the correct modal: ___ I borrow your pen?",
    options: ["Can", "Must", "Should", "Would"],
    answer: "Can",
  },
  {
    question: "Choose the correct modal: When I was young, I ___ run very fast.",
    options: ["could", "must", "should", "will"],
    answer: "could",
  },
  {
    question: "Choose the correct modal: Don't worry. I ___ help you.",
    options: ["will", "must", "could", "should"],
    answer: "will",
  },
  {
    question: "Choose the correct modal: ___ you please open the window?",
    options: ["Would", "Must", "Should", "Can"],
    answer: "Would",
  },
  {
    question: "Choose the correct modal: You ___ eat more vegetables.",
    options: ["should", "would", "can", "could"],
    answer: "should",
  },
  {
    question: "Choose the correct modal: Students ___ follow the school rules.",
    options: ["must", "would", "could", "can"],
    answer: "must",
  },
  {
    question: "Choose the correct modal: Birds ___ fly.",
    options: ["can", "must", "would", "should"],
    answer: "can",
  },
  {
    question: "Choose the correct modal: ___ you help me yesterday?",
    options: ["Could", "Will", "Must", "Should"],
    answer: "Could",
  },
  {
    question: "Choose the correct modal: I promise I ___ never do that again.",
    options: ["will", "could", "should", "can"],
    answer: "will",
  },
  {
    question: "Choose the correct modal: ___ you like to join us for dinner?",
    options: ["Would", "Must", "Can", "Should"],
    answer: "Would",
  },
  {
    question: "Choose the correct modal: You ___ see a doctor if you feel sick.",
    options: ["should", "would", "can", "must"],
    answer: "should",
  },
  {
    question: "Choose the correct modal: You ___ not use your phone during the exam.",
    options: ["must", "could", "would", "can"],
    answer: "must",
  },
  {
    question: "Choose the correct modal: I ___ speak three languages.",
    options: ["can", "should", "must", "would"],
    answer: "can",
  },
  {
    question: "Choose the correct modal: ___ you pass me the salt, please?",
    options: ["Could", "Must", "Should", "Will"],
    answer: "Could",
  },
  {
    question: "Choose the correct modal: I think it ___ rain tomorrow.",
    options: ["will", "must", "should", "could"],
    answer: "will",
  },
  {
    question: "Choose the correct modal: If I had more money, I ___ buy a new car.",
    options: ["would", "must", "can", "should"],
    answer: "would",
  },
  {
    question: "Choose the correct modal: You ___ be polite to your elders.",
    options: ["should", "would", "could", "can"],
    answer: "should",
  },
  {
    question: "Choose the correct modal: You ___ bring your ID card to enter the building.",
    options: ["must", "would", "could", "can"],
    answer: "must",
  },
  {
    question: "Choose the correct modal: My little brother ___ read when he was four.",
    options: ["could", "must", "will", "should"],
    answer: "could",
  },
  {
    question: "Choose the correct modal: ___ I open the door for you?",
    options: ["Can", "Must", "Should", "Would"],
    answer: "Can",
  },
  {
    question: "Choose the correct modal: I ___ finish this work by tomorrow.",
    options: ["will", "would", "could", "should"],
    answer: "will",
  },
  {
    question: "Choose the correct modal: ___ you like to have a cup of coffee?",
    options: ["Would", "Must", "Should", "Could"],
    answer: "Would",
  },
  {
    question: "Choose the correct modal: You ___ exercise regularly to stay healthy.",
    options: ["should", "would", "could", "can"],
    answer: "should",
  },
  {
    question: "Choose the correct modal: We ___ obey traffic rules.",
    options: ["must", "would", "could", "can"],
    answer: "must",
  },
  {
    question: "Choose the correct modal: She ___ play the piano very well.",
    options: ["can", "must", "should", "would"],
    answer: "can",
  },
  {
    question: "Choose the correct modal: ___ you please wait here for a moment?",
    options: ["Could", "Must", "Should", "Will"],
    answer: "Could",
  },
  {
    question: "Choose the correct modal: I ___ visit my grandparents next weekend.",
    options: ["will", "must", "should", "could"],
    answer: "will",
  },
  {
    question: "Choose the correct modal: If I were you, I ___ apologize.",
    options: ["would", "can", "must", "will"],
    answer: "would",
  },
  {
    question: "Choose the correct modal: You ___ listen carefully to your teacher.",
    options: ["should", "would", "could", "can"],
    answer: "should",
  },
  {
    question: "Choose the correct modal: Employees ___ wear their ID cards at work.",
    options: ["must", "could", "would", "can"],
    answer: "must",
  },
  {
    question: "Choose the correct modal: ___ you swim when you were a child?",
    options: ["Could", "Must", "Should", "Would"],
    answer: "Could",
  },
  {
    question: "Choose the correct modal: I ___ help you with your project this evening.",
    options: ["will", "must", "should", "would"],
    answer: "will",
  },
  {
    question: "Choose the correct modal: ___ you like some more food?",
    options: ["Would", "Must", "Should", "Can"],
    answer: "Would",
  },
  {
    question: "Choose the correct modal: You ___ take an umbrella. It may rain.",
    options: ["should", "would", "can", "must"],
    answer: "should",
  },
  {
    question: "Choose the correct modal: You ___ stop when the traffic light is red.",
    options: ["must", "could", "would", "can"],
    answer: "must",
  },
  {
    question: "Choose the correct modal: I ___ lift this box by myself.",
    options: ["can", "should", "must", "would"],
    answer: "can",
  },
  {
    question: "Choose the correct modal: ___ you explain this question again?",
    options: ["Could", "Must", "Should", "Will"],
    answer: "Could",
  },
  {
    question: "Choose the correct modal: Don't worry about the tickets. I ___ book them.",
    options: ["will", "could", "should", "must"],
    answer: "will",
  },
  {
    question: "Choose the correct modal: If I had a car, I ___ drive to work every day.",
    options: ["would", "must", "can", "should"],
    answer: "would",
  },
  {
    question: "Choose the correct modal: You ___ drink plenty of water in hot weather.",
    options: ["should", "would", "could", "can"],
    answer: "should",
  },
  {
    question: "Choose the correct modal: All visitors ___ register at the reception.",
    options: ["must", "would", "could", "can"],
    answer: "must",
  },
  {
    question: "Choose the correct modal: ___ I use your phone for a minute?",
    options: ["Can", "Must", "Should", "Would"],
    answer: "Can",
  },
  {
    question: "Choose the correct modal: When she was younger, she ___ dance very well.",
    options: ["could", "must", "will", "should"],
    answer: "could",
  },
  {
    question: "Choose the correct modal: I ___ always remember your kindness.",
    options: ["will", "could", "should", "must"],
    answer: "will",
  },
  {
    question: "Choose the correct modal: If you invited me, I ___ definitely come.",
    options: ["would", "must", "can", "should"],
    answer: "would",
  },
  {
    question: "Choose the correct modal: You ___ complete your homework before playing games.",
    options: ["must", "could", "would", "can"],
    answer: "must",
  },
];
export default function OtherverbsQuiz() {
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
            Can, Could, Will, Would, Should, Must Quiz
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