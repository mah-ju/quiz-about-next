import { Question } from "@/types/Question";
import { CircleArrowRight, CircleArrowLeft, CircleCheck } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";

type Props = {
  question: Question;
  count: number;
  onNext: () => void;
  onPrev: () => void;
  onAnswer: (answer: number) => void;
  showPrevButton: boolean;
  userClickAnswer: number | null;
  showFinishButton: boolean;
  openModal: () => void;
};
export const QuestionItem = ({
  question,
  count,
  onNext,
  onPrev,
  onAnswer,
  showPrevButton,
  userClickAnswer,
  showFinishButton,
  openModal,
}: Props) => {
  const [selectAnswer, setSelectAnswer] = useState<number | null>(null);

  const handleNext = () => {
    if (selectAnswer === null || selectAnswer === undefined) {
      alert("Please, choose one option!");
    } else {
      onNext();
    }
  };

  useEffect(() => {
    setSelectAnswer(userClickAnswer);
  }, [userClickAnswer]);

  const getOptionClass = (key: number) => {
    if (selectAnswer !== null) {
      if (selectAnswer === key) {
        return "bg-myBlue text-white md:hover:text-black pointer-events-none";
      }
    }
  };

  return (
    <div>
      <p className="text-2xl font-bold text-center mt-4 mx-4 lg:text-3xl">
        {count}. {question.question}
      </p>

      <ul className="text-lg mx-6 mt-8 space-y-3">
        {question.options.map((item, key) => (
          <li
            key={key}
            onClick={() => {
              onAnswer(key);
            }}
            className={`p-2 rounded-md cursor-pointer bg-blue-100 md:hover:bg-lime-200/60
              
             ${getOptionClass(key)}
           
              `}
          >
            {item}
          </li>
        ))}

        <div className="flex gap-10 justify-center pt-6">
          {showPrevButton && (
            <button onClick={onPrev}>
              <CircleArrowLeft size={32} />
            </button>
          )}

          {showFinishButton ? (
            <button onClick={openModal}>
              <CircleCheck size={32} />
            </button>
          ) : (
            <button onClick={handleNext}>
              <CircleArrowRight size={32} />
            </button>
          )}
        </div>
      </ul>
    </div>
  );
};
