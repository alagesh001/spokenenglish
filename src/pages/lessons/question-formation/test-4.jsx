import React, { useState } from "react";

const questions = [
  {
    question: "Could you tell me ___?",
    options: [
      "where is the station",
      "where the station is",
      "where was the station",
      "where the station",
    ],
    answer: "where the station is",
  },
  {
    question: "Do you know ___?",
    options: [
      "what time does the shop open",
      "what time the shop opens",
      "what time the shop open",
      "what time is the shop open",
    ],
    answer: "what time the shop opens",
  },
  {
    question: "Could you tell me ___?",
    options: [
      "where do you live",
      "where you live",
      "where are you live",
      "where you lives",
    ],
    answer: "where you live",
  },
  {
    question: "Do you know ___?",
    options: [
      "when will the train arrive",
      "when the train will arrive",
      "when the train arrives will",
      "when does the train arrive",
    ],
    answer: "when the train will arrive",
  },
  {
    question: "Can you tell me ___?",
    options: [
      "how much does it cost",
      "how much it costs",
      "how much cost it",
      "how it costs much",
    ],
    answer: "how much it costs",
  },
  {
    question: "Would you mind telling me ___?",
    options: [
      "where is the nearest bank",
      "where the nearest bank is",
      "where does the nearest bank",
      "where the bank nearest is",
    ],
    answer: "where the nearest bank is",
  },
  {
    question: "Do you know ___?",
    options: [
      "why is she late",
      "why she is late",
      "why does she late",
      "why late she is",
    ],
    answer: "why she is late",
  },
  {
    question: "Could you tell me ___?",
    options: [
      "what is your name",
      "what your name is",
      "what does your name",
      "what your name",
    ],
    answer: "what your name is",
  },
  {
    question: "Do you know ___?",
    options: [
      "where can I buy tickets",
      "where I can buy tickets",
      "where I buy can tickets",
      "where do I buy tickets",
    ],
    answer: "where I can buy tickets",
  },
  {
    question: "Can you tell me ___?",
    options: [
      "when does the movie start",
      "when the movie starts",
      "when starts the movie",
      "when is the movie starts",
    ],
    answer: "when the movie starts",
  },
  {
    question: "I'd like to know ___?",
    options: [
      "if you are available tomorrow",
      "are you available tomorrow",
      "if are you available tomorrow",
      "you are available if tomorrow",
    ],
    answer: "if you are available tomorrow",
  },
  {
    question: "Do you know ___?",
    options: [
      "whether he has finished the work",
      "whether has he finished the work",
      "whether he finished has the work",
      "has he finished the work",
    ],
    answer: "whether he has finished the work",
  },
  {
    question: "Could you tell me ___?",
    options: [
      "how long have you lived here",
      "how long you have lived here",
      "how long you lived have here",
      "how long did you live here",
    ],
    answer: "how long you have lived here",
  },
  {
    question: "Do you know ___?",
    options: [
      "who is that man",
      "who that man is",
      "who does that man",
      "who that is man",
    ],
    answer: "who that man is",
  },
  {
    question: "Can you tell me ___?",
    options: [
      "what does this word mean",
      "what this word means",
      "what means this word",
      "what this word mean",
    ],
    answer: "what this word means",
  },
  {
    question: "Would you mind telling me ___?",
    options: [
      "how can I get to the airport",
      "how I can get to the airport",
      "how do I get to the airport",
      "how I get can to the airport",
    ],
    answer: "how I can get to the airport",
  },
  {
    question: "Do you know ___?",
    options: [
      "if she likes coffee",
      "does she like coffee",
      "if does she like coffee",
      "she likes coffee if",
    ],
    answer: "if she likes coffee",
  },
  {
    question: "Could you tell me ___?",
    options: [
      "why did he leave early",
      "why he left early",
      "why he did leave early",
      "why left he early",
    ],
    answer: "why he left early",
  },
  {
    question: "I'd like to know ___?",
    options: [
      "when will you come back",
      "when you will come back",
      "when do you come back",
      "when you come back will",
    ],
    answer: "when you will come back",
  },
  {
    question: "Can you tell me ___?",
    options: [
      "whether this bus goes to Delhi",
      "whether does this bus go to Delhi",
      "does this bus go to Delhi",
      "whether this bus to Delhi goes",
    ],
    answer: "whether this bus goes to Delhi",
  },
];
export default function indirectquestionsQuiz() {
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
            Indirect Questions Quiz
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