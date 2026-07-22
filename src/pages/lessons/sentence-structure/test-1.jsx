import React, { useState } from "react";

const questions = [
  {
    question: "Identify the subject: Rahul plays cricket.",
    options: ["Rahul", "Plays", "Cricket", "None"],
    answer: "Rahul",
  },
  {
    question: "Identify the verb: The boy eats an apple.",
    options: ["Boy", "Eats", "Apple", "The"],
    answer: "Eats",
  },
  {
    question: "Identify the object: She reads a book.",
    options: ["She", "Reads", "A", "Book"],
    answer: "Book",
  },
  {
    question: "Choose the correct sentence.",
    options: [
      "Ravi cricket plays.",
      "Ravi plays cricket.",
      "Plays Ravi cricket.",
      "Cricket Ravi plays.",
    ],
    answer: "Ravi plays cricket.",
  },
  {
    question: "Which is a simple sentence?",
    options: [
      "I like tea and my brother likes coffee.",
      "I like tea.",
      "I was tired, but I worked.",
      "She sings and he dances.",
    ],
    answer: "I like tea.",
  },
  {
    question: "Choose the correct word: I like tea ___ coffee.",
    options: ["And", "But", "Because", "Or"],
    answer: "And",
  },
  {
    question: "Which sentence is negative?",
    options: [
      "I play football.",
      "She likes music.",
      "I do not play football.",
      "They are students.",
    ],
    answer: "I do not play football.",
  },
  {
    question: "Make this sentence negative: He plays cricket.",
    options: [
      "He not plays cricket.",
      "He does not play cricket.",
      "He do not plays cricket.",
      "He does not plays cricket.",
    ],
    answer: "He does not play cricket.",
  },
  {
    question: "Identify the subject: The children play in the park.",
    options: ["Children", "Play", "Park", "In"],
    answer: "Children",
  },
  {
    question: "Identify the object: Rahul drinks water.",
    options: ["Rahul", "Drinks", "Water", "None"],
    answer: "Water",
  },
  {
    question: "Choose the correct sentence.",
    options: [
      "She a book reads.",
      "Reads she a book.",
      "She reads a book.",
      "A book she reads.",
    ],
    answer: "She reads a book.",
  },
  {
    question: "Which sentence has the pattern Subject + Verb + Object?",
    options: [
      "The baby sleeps.",
      "Ravi eats rice.",
      "She is happy.",
      "They are running.",
    ],
    answer: "Ravi eats rice.",
  },
  {
    question: "Choose the correct conjunction: I was tired, ___ I continued working.",
    options: ["And", "But", "Or", "So"],
    answer: "But",
  },
  {
    question: "Which is a compound sentence?",
    options: [
      "I am happy.",
      "She runs quickly.",
      "I was hungry, so I ate food.",
      "They play football.",
    ],
    answer: "I was hungry, so I ate food.",
  },
  {
    question: "Choose the correct negative sentence: She likes coffee.",
    options: [
      "She don't like coffee.",
      "She doesn't likes coffee.",
      "She doesn't like coffee.",
      "She not likes coffee.",
    ],
    answer: "She doesn't like coffee.",
  },
  {
    question: "Make this sentence negative: They play football.",
    options: [
      "They doesn't play football.",
      "They don't play football.",
      "They not play football.",
      "They don't plays football.",
    ],
    answer: "They don't play football.",
  },
  {
    question: "Identify the verb: The teacher teaches English.",
    options: ["Teacher", "Teaches", "English", "The"],
    answer: "Teaches",
  },
  {
    question: "Identify the subject: My sister cooks dinner.",
    options: ["My", "Sister", "Cooks", "Dinner"],
    answer: "Sister",
  },
  {
    question: "Identify the object: The boy kicks the ball.",
    options: ["Boy", "Kicks", "Ball", "The"],
    answer: "Ball",
  },
  {
    question: "Which is a simple sentence?",
    options: [
      "I went home because I was tired.",
      "She likes tea, but I like coffee.",
      "The dog is sleeping.",
      "He ran fast and won the race.",
    ],
    answer: "The dog is sleeping.",
  },
  {
    question: "Complete the compound sentence: I like English ___ I don't like Maths.",
    options: ["And", "But", "Or", "So"],
    answer: "But",
  },
  {
    question: "Choose the correct sentence.",
    options: [
      "The boy eats an apple.",
      "The boy an apple eats.",
      "Eats the boy an apple.",
      "An apple eats the boy.",
    ],
    answer: "The boy eats an apple.",
  },
  {
    question: "Make this sentence negative: I like pizza.",
    options: [
      "I doesn't like pizza.",
      "I don't like pizza.",
      "I not like pizza.",
      "I don't likes pizza.",
    ],
    answer: "I don't like pizza.",
  },
  {
    question: "Choose the correct negative sentence: He watches TV.",
    options: [
      "He don't watch TV.",
      "He doesn't watch TV.",
      "He doesn't watches TV.",
      "He not watch TV.",
    ],
    answer: "He doesn't watch TV.",
  },
  {
    question: "Which sentence contains two complete ideas joined by 'and'?",
    options: [
      "I eat rice.",
      "She is happy.",
      "I like tea and my brother likes coffee.",
      "They play cricket.",
    ],
    answer: "I like tea and my brother likes coffee.",
  },
  {
    question: "Identify the object: She writes a letter.",
    options: ["She", "Writes", "A", "Letter"],
    answer: "Letter",
  },
  {
    question: "Choose the correct conjunction: Hurry up, ___ you will miss the bus.",
    options: ["And", "But", "Or", "So"],
    answer: "Or",
  },
  {
    question: "Make this sentence negative: We are happy.",
    options: [
      "We do not happy.",
      "We are not happy.",
      "We don't are happy.",
      "We not are happy.",
    ],
    answer: "We are not happy.",
  },
  {
    question: "Which sentence follows Subject + Verb + Object?",
    options: [
      "The girl sings.",
      "John is tall.",
      "The cat drinks milk.",
      "They are happy.",
    ],
    answer: "The cat drinks milk.",
  },
  {
    question: "Choose the correct compound sentence.",
    options: [
      "I like apples and I like oranges.",
      "I like apples.",
      "She is tall.",
      "They play football.",
    ],
    answer: "I like apples and I like oranges.",
  },
];

export default function SentenceStructureQuestions() {
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
            Sentence Structure Quiz
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