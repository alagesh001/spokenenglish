import React, { useState } from "react";

const questions = [
  {
    question: "Choose the correct sentence: I ___ you tomorrow.",
    options: ["call", "called", "will call", "am called"],
    answer: "will call",
  },
  {
    question: "Choose the correct sentence: She ___ to Delhi next week.",
    options: ["travels", "traveled", "will travel", "has traveled"],
    answer: "will travel",
  },
  {
    question: "Choose the correct sentence: This time tomorrow, I ___ on a plane.",
    options: [
      "will sit",
      "will be sitting",
      "will have sat",
      "will have been sitting",
    ],
    answer: "will be sitting",
  },
  {
    question: "Choose the correct sentence: By next year, I ___ my course.",
    options: [
      "will finish",
      "will be finishing",
      "will have finished",
      "will have been finishing",
    ],
    answer: "will have finished",
  },
  {
    question: "Choose the correct sentence: By June, she ___ here for five years.",
    options: [
      "will work",
      "will be working",
      "will have worked",
      "will have been working",
    ],
    answer: "will have been working",
  },
  {
    question: "Which tense is used in this sentence? 'I will visit my grandparents tomorrow.'",
    options: [
      "Future Simple",
      "Future Continuous",
      "Future Perfect",
      "Future Perfect Continuous",
    ],
    answer: "Future Simple",
  },
  {
    question: "Which tense is used in this sentence? 'She will be studying at 8 PM.'",
    options: [
      "Future Simple",
      "Future Continuous",
      "Future Perfect",
      "Future Perfect Continuous",
    ],
    answer: "Future Continuous",
  },
  {
    question: "Which tense is used in this sentence? 'They will have completed the project by Friday.'",
    options: [
      "Future Simple",
      "Future Continuous",
      "Future Perfect",
      "Future Perfect Continuous",
    ],
    answer: "Future Perfect",
  },
  {
    question: "Which tense is used in this sentence? 'He will have been working for ten hours by evening.'",
    options: [
      "Future Simple",
      "Future Continuous",
      "Future Perfect",
      "Future Perfect Continuous",
    ],
    answer: "Future Perfect Continuous",
  },
  {
    question: "Choose the correct sentence: We ___ a new house next year.",
    options: ["buy", "bought", "will buy", "have bought"],
    answer: "will buy",
  },
  {
    question: "Choose the correct sentence: At 7 PM tonight, they ___ dinner.",
    options: [
      "will eat",
      "will be eating",
      "will have eaten",
      "will have been eating",
    ],
    answer: "will be eating",
  },
  {
    question: "Choose the correct sentence: By the time you arrive, I ___ the work.",
    options: [
      "will finish",
      "will be finishing",
      "will have finished",
      "will have been finishing",
    ],
    answer: "will have finished",
  },
  {
    question: "Choose the correct sentence: By next month, she ___ English for three years.",
    options: [
      "will learn",
      "will be learning",
      "will have learned",
      "will have been learning",
    ],
    answer: "will have been learning",
  },
  {
    question: "Choose the correct sentence: I think it ___ tomorrow.",
    options: ["rains", "rained", "will rain", "is rained"],
    answer: "will rain",
  },
  {
    question: "Choose the correct sentence: Don't call me at 10 AM. I ___ in a meeting.",
    options: [
      "will be",
      "will be sitting",
      "will have sat",
      "will have been sat",
    ],
    answer: "will be sitting",
  },
  {
    question: "Choose the correct sentence: By 2030, scientists ___ new solutions.",
    options: [
      "will develop",
      "will be developing",
      "will have developed",
      "will have been developing",
    ],
    answer: "will have developed",
  },
  {
    question: "Choose the correct sentence: By next December, I ___ at this company for ten years.",
    options: [
      "will work",
      "will be working",
      "will have worked",
      "will have been working",
    ],
    answer: "will have been working",
  },
  {
    question: "Choose the correct sentence: She ___ her friend this evening.",
    options: ["will meet", "met", "meets yesterday", "has met"],
    answer: "will meet",
  },
  {
    question: "Choose the correct sentence: This time next week, we ___ on the beach.",
    options: [
      "will relax",
      "will be relaxing",
      "will have relaxed",
      "will have been relaxing",
    ],
    answer: "will be relaxing",
  },
  {
    question: "Choose the correct sentence: By the end of the day, he ___ all the emails.",
    options: [
      "will answer",
      "will be answering",
      "will have answered",
      "will have been answering",
    ],
    answer: "will have answered",
  },
  {
    question: "Choose the correct sentence: By 5 PM, they ___ for six hours.",
    options: [
      "will drive",
      "will be driving",
      "will have driven",
      "will have been driving",
    ],
    answer: "will have been driving",
  },
  {
    question: "Choose the correct sentence: I promise I ___ you with your work.",
    options: ["help", "helped", "will help", "am helped"],
    answer: "will help",
  },
  {
    question: "Choose the correct sentence: At this time tomorrow, he ___ his exam.",
    options: [
      "will take",
      "will be taking",
      "will have taken",
      "will have been taking",
    ],
    answer: "will be taking",
  },
  {
    question: "Choose the correct sentence: By next Monday, we ___ the new website.",
    options: [
      "will launch",
      "will be launching",
      "will have launched",
      "will have been launching",
    ],
    answer: "will have launched",
  },
  {
    question: "Choose the correct sentence: By the end of this year, she ___ at the company for five years.",
    options: [
      "will work",
      "will be working",
      "will have worked",
      "will have been working",
    ],
    answer: "will have been working",
  },
  {
    question: "Choose the correct sentence: They ___ to the new office tomorrow.",
    options: ["will move", "moved", "are moved", "have moved"],
    answer: "will move",
  },
  {
    question: "Choose the correct sentence: At 9 PM tonight, I ___ a movie.",
    options: [
      "will watch",
      "will be watching",
      "will have watched",
      "will have been watched",
    ],
    answer: "will be watching",
  },
  {
    question: "Choose the correct sentence: By the time the teacher arrives, the students ___ the test.",
    options: [
      "will start",
      "will be starting",
      "will have started",
      "will have been starting",
    ],
    answer: "will have started",
  },
  {
    question: "Choose the correct sentence: By next year, he ___ this business for ten years.",
    options: [
      "will run",
      "will be running",
      "will have run",
      "will have been running",
    ],
    answer: "will have been running",
  },
  {
    question: "Choose the correct sentence: I ___ you when I reach home.",
    options: ["will call", "called", "am calling yesterday", "have called"],
    answer: "will call",
  },
];

export default function FutureTenseQuiz() {
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
            Future Tense Quiz
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