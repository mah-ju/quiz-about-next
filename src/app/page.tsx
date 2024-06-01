"use client";
import { questions } from "@/data/questions";
import { QuestionItem } from "@/components/QuestionItem";
import { useState } from "react";
import { ProgressBar } from "@/components/ProgressBar";
import { Modal } from "@/components/Modal";

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [showModal, setShowModal] = useState(false);

  const nextQuestion = () => {
    if (userAnswers === null || userAnswers === undefined) {
      alert("Please, choose one option!");
    } else {
      setCurrentQuestion(
        (prevQuestion) => (prevQuestion + 1) % questions.length
      );
    }
  };

  const prevQuestion = () => {
    setCurrentQuestion(
      (prevQuestion) => (prevQuestion - 1 + questions.length) % questions.length
    );
  };

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleAnswer = (answer: number) => {
    setUserAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestion] = answer;
      return updatedAnswers;
    });
  };

  return (
    <div
      className="space-y-8 flex flex-col
   justify-center items-center h-screen md:flex-row "
    >
      <ProgressBar
        currentValue={currentQuestion}
        maxValue={questions.length - 1}
      />

      <h1
        className="text-5xl font-bold text-center
       text-lime-200"
      >
        Quiz about Next.js
      </h1>
      <div className="bg-white w-[90%] pb-10 rounded-md mx-4">
        <QuestionItem
          question={questions[currentQuestion]}
          count={currentQuestion + 1}
          onNext={nextQuestion}
          onPrev={prevQuestion}
          onAnswer={handleAnswer}
          showPrevButton={currentQuestion > 0}
          userClickAnswer={userAnswers[currentQuestion]}
          showFinishButton={currentQuestion === questions.length - 1}
          openModal={toggleModal}
        />
      </div>
      {showModal && <Modal onClose={toggleModal} userAnswers={userAnswers} />}
    </div>
  );
}
