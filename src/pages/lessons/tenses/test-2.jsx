import React, { useState } from "react";

const questions = [
  {
    question: "Choose the correct sentence: I ___ to school yesterday.",
    options: ["go", "went", "was going", "have gone"],
    answer: "went",
  },
  {
    question: "Choose the correct sentence: She ___ dinner when I called her.",
    options: ["cooked", "was cooking", "had cooked", "has cooked"],
    answer: "was cooking",
  },
  {
    question: "Choose the correct sentence: They ___ the movie before.",
    options: ["saw", "were seeing", "had seen", "have seen"],
    answer: "had seen",
  },
  {
    question: "Choose the correct sentence: He ___ for two hours before the bus arrived.",
    options: ["waited", "was waiting", "had waited", "had been waiting"],
    answer: "had been waiting",
  },
  {
    question: "Which tense is used in this sentence? 'I visited Delhi last year.'",
    options: [
      "Past Simple",
      "Past Continuous",
      "Past Perfect",
      "Past Perfect Continuous",
    ],
    answer: "Past Simple",
  },
  {
    question: "Which tense is used in this sentence? 'She was reading a book.'",
    options: [
      "Past Simple",
      "Past Continuous",
      "Past Perfect",
      "Past Perfect Continuous",
    ],
    answer: "Past Continuous",
  },
  {
    question: "Which tense is used in this sentence? 'They had finished their work.'",
    options: [
      "Past Simple",
      "Past Continuous",
      "Past Perfect",
      "Past Perfect Continuous",
    ],
    answer: "Past Perfect",
  },
  {
    question: "Which tense is used in this sentence? 'He had been working all day.'",
    options: [
      "Past Simple",
      "Past Continuous",
      "Past Perfect",
      "Past Perfect Continuous",
    ],
    answer: "Past Perfect Continuous",
  },
  {
    question: "Choose the correct sentence: My father ___ a new car last month.",
    options: ["buys", "bought", "was buying", "had bought"],
    answer: "bought",
  },
  {
    question: "Choose the correct sentence: We ___ TV when the electricity went off.",
    options: ["watched", "were watching", "had watched", "have watched"],
    answer: "were watching",
  },
  {
    question: "Choose the correct sentence: Rahul ___ the letter before he left.",
    options: ["wrote", "was writing", "had written", "has written"],
    answer: "had written",
  },
  {
    question: "Choose the correct sentence: She ___ for three hours before she took a break.",
    options: [
      "studied",
      "was studying",
      "had studied",
      "had been studying",
    ],
    answer: "had been studying",
  },
  {
    question: "Choose the correct sentence: I ___ my friend yesterday.",
    options: ["meet", "met", "was meeting", "had met"],
    answer: "met",
  },
  {
    question: "Choose the correct sentence: The children ___ in the park when it started raining.",
    options: ["played", "were playing", "had played", "have played"],
    answer: "were playing",
  },
  {
    question: "Choose the correct sentence: She ___ already ___ dinner when I arrived.",
    options: [
      "did / eat",
      "was / eating",
      "had / eaten",
      "had been / eating",
    ],
    answer: "had / eaten",
  },
  {
    question: "Choose the correct sentence: It ___ for two hours before the rain stopped.",
    options: ["rained", "was raining", "had rained", "had been raining"],
    answer: "had been raining",
  },
  {
    question: "Choose the correct sentence: We ___ football last Sunday.",
    options: ["play", "played", "were playing", "had played"],
    answer: "played",
  },
  {
    question: "Choose the correct sentence: Why ___ you ___ when I saw you?",
    options: [
      "did / run",
      "were / running",
      "had / run",
      "had been / running",
    ],
    answer: "were / running",
  },
  {
    question: "Choose the correct sentence: I ___ never ___ such a beautiful place before that trip.",
    options: [
      "did / see",
      "was / seeing",
      "had / seen",
      "had been / seeing",
    ],
    answer: "had / seen",
  },
  {
    question: "Choose the correct sentence: They ___ to Mumbai in 2022.",
    options: ["move", "moved", "were moving", "had moved"],
    answer: "moved",
  },
  {
    question: "Choose the correct sentence: He ___ for the bus when I arrived.",
    options: ["waited", "was waiting", "had waited", "had been waited"],
    answer: "was waiting",
  },
  {
    question: "Choose the correct sentence: The train ___ before we reached the station.",
    options: ["left", "was leaving", "had left", "had been leaving"],
    answer: "had left",
  },
  {
    question: "Choose the correct sentence: She ___ for the exam for months before she took it.",
    options: [
      "studied",
      "was studying",
      "had studied",
      "had been studying",
    ],
    answer: "had been studying",
  },
  {
    question: "Choose the correct sentence: I ___ my keys yesterday.",
    options: ["lose", "lost", "was losing", "had lost"],
    answer: "lost",
  },
  {
    question: "Choose the correct sentence: While I ___, my brother called me.",
    options: ["slept", "was sleeping", "had slept", "had been slept"],
    answer: "was sleeping",
  },
  {
    question: "Choose the correct sentence: By the time we arrived, the movie ___.",
    options: ["started", "was starting", "had started", "had been starting"],
    answer: "had started",
  },
  {
    question: "Choose the correct sentence: They ___ for five hours before they reached the village.",
    options: [
      "walked",
      "were walking",
      "had walked",
      "had been walking",
    ],
    answer: "had been walking",
  },
  {
    question: "Choose the correct sentence: He ___ his homework last night.",
    options: ["does", "did", "was doing", "had done"],
    answer: "did",
  },
  {
    question: "Choose the correct sentence: I ___ lunch when you called.",
    options: ["ate", "was eating", "had eaten", "had been eaten"],
    answer: "was eating",
  },
  {
    question: "Choose the correct sentence: She ___ the project before the deadline.",
    options: ["finished", "was finishing", "had finished", "had been finishing"],
    answer: "had finished",
  },
];

export default function PastTenseQuiz() {
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
            Past Tense Quiz
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