import React, { useState } from "react";

const questions = [
  {
    question: "Choose the correct sentence: She ___ to school every day.",
    options: ["go", "goes", "is going", "has gone"],
    answer: "goes",
  },
  {
    question: "Choose the correct sentence: I ___ my homework right now.",
    options: ["do", "did", "am doing", "have done"],
    answer: "am doing",
  },
  {
    question: "Choose the correct sentence: They ___ this movie three times.",
    options: ["watch", "are watching", "have watched", "have been watching"],
    answer: "have watched",
  },
  {
    question: "Choose the correct sentence: He ___ English for two years.",
    options: ["learns", "is learning", "has learned", "has been learning"],
    answer: "has been learning",
  },
  {
    question: "Which tense is used in this sentence? 'I drink coffee every morning.'",
    options: [
      "Present Simple",
      "Present Continuous",
      "Present Perfect",
      "Present Perfect Continuous",
    ],
    answer: "Present Simple",
  },
  {
    question: "Which tense is used in this sentence? 'She is talking on the phone.'",
    options: [
      "Present Simple",
      "Present Continuous",
      "Present Perfect",
      "Present Perfect Continuous",
    ],
    answer: "Present Continuous",
  },
  {
    question: "Which tense is used in this sentence? 'We have finished our work.'",
    options: [
      "Present Simple",
      "Present Continuous",
      "Present Perfect",
      "Present Perfect Continuous",
    ],
    answer: "Present Perfect",
  },
  {
    question: "Which tense is used in this sentence? 'They have been waiting for an hour.'",
    options: [
      "Present Simple",
      "Present Continuous",
      "Present Perfect",
      "Present Perfect Continuous",
    ],
    answer: "Present Perfect Continuous",
  },
  {
    question: "Choose the correct sentence: My father ___ in a bank.",
    options: ["works", "is working", "has worked", "has been working"],
    answer: "works",
  },
  {
    question: "Choose the correct sentence: Look! The children ___.",
    options: ["play", "are playing", "have played", "have been playing"],
    answer: "are playing",
  },
  {
    question: "Choose the correct sentence: I ___ my keys. I can't find them.",
    options: ["lose", "am losing", "have lost", "have been losing"],
    answer: "have lost",
  },
  {
    question: "Choose the correct sentence: She ___ for the exam since morning.",
    options: [
      "studies",
      "is studying",
      "has studied",
      "has been studying",
    ],
    answer: "has been studying",
  },
  {
    question: "Choose the correct sentence: Water ___ at 100°C.",
    options: ["boils", "is boiling", "has boiled", "has been boiling"],
    answer: "boils",
  },
  {
    question: "Choose the correct sentence: We ___ dinner at the moment.",
    options: ["eat", "are eating", "have eaten", "have been eating"],
    answer: "are eating",
  },
  {
    question: "Choose the correct sentence: Rahul ___ his project already.",
    options: ["completes", "is completing", "has completed", "has been completing"],
    answer: "has completed",
  },
  {
    question: "Choose the correct sentence: It ___ since early morning.",
    options: ["rains", "is raining", "has rained", "has been raining"],
    answer: "has been raining",
  },
  {
    question: "Choose the correct sentence: My mother ___ delicious food every day.",
    options: ["cooks", "is cooking", "has cooked", "has been cooking"],
    answer: "cooks",
  },
  {
    question: "Choose the correct sentence: Why ___ you ___ so fast?",
    options: [
      "do / run",
      "are / running",
      "have / run",
      "have been / running",
    ],
    answer: "are / running",
  },
  {
    question: "Choose the correct sentence: I ___ never ___ to London.",
    options: [
      "do / go",
      "am / going",
      "have / been",
      "have been / going",
    ],
    answer: "have / been",
  },
  {
    question: "Choose the correct sentence: They ___ football every Sunday.",
    options: ["play", "are playing", "have played", "have been playing"],
    answer: "play",
  },
  {
    question: "Choose the correct sentence: She ___ for the bus for 30 minutes.",
    options: [
      "waits",
      "is waiting",
      "has waited",
      "has been waiting",
    ],
    answer: "has been waiting",
  },
  {
    question: "Choose the correct sentence: The students ___ a test now.",
    options: ["take", "are taking", "have taken", "have been taking"],
    answer: "are taking",
  },
  {
    question: "Choose the correct sentence: We ___ this restaurant many times.",
    options: ["visit", "are visiting", "have visited", "have been visiting"],
    answer: "have visited",
  },
  {
    question: "Choose the correct sentence: He ___ his car every Sunday.",
    options: ["washes", "is washing", "has washed", "has been washing"],
    answer: "washes",
  },
  {
    question: "Choose the correct sentence: I ___ this book since Monday.",
    options: [
      "read",
      "am reading",
      "have read",
      "have been reading",
    ],
    answer: "have been reading",
  },
  {
    question: "Choose the correct sentence: She ___ just ___ her lunch.",
    options: [
      "does / eat",
      "is / eating",
      "has / eaten",
      "has been / eating",
    ],
    answer: "has / eaten",
  },
  {
    question: "Choose the correct sentence: Listen! Someone ___ at the door.",
    options: ["knocks", "is knocking", "has knocked", "has been knocking"],
    answer: "is knocking",
  },
  {
    question: "Choose the correct sentence: I ___ my grandparents every weekend.",
    options: ["visit", "am visiting", "have visited", "have been visiting"],
    answer: "visit",
  },
  {
    question: "Choose the correct sentence: He ___ three cups of coffee today.",
    options: ["drinks", "is drinking", "has drunk", "has been drinking"],
    answer: "has drunk",
  },
  {
    question: "Choose the correct sentence: They ___ for the train for over an hour.",
    options: [
      "wait",
      "are waiting",
      "have waited",
      "have been waiting",
    ],
    answer: "have been waiting",
  },
];

export default function PresentTenseQuiz() {
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
            Present Tense Quiz
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