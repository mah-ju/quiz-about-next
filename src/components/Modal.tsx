import { CircleX } from "lucide-react";

type Props = {
  onClose: () => void;
  userAnswers: number[];
};
export const Modal = ({ onClose, userAnswers }: Props) => {
  let rightAnswers = [2, 1, 1, 3, 2, 2, 3, 3, 0, 3];

  const countMatches = (rightAnswers: number[], userAnswers: number[]) => {
    let matches = 0;
    for (let i = 0; i < rightAnswers.length; i++) {
      if (rightAnswers[i] === userAnswers[i]) {
        matches++;
      }
    }
    return matches;
  };

  const numMatches = countMatches(rightAnswers, userAnswers);

  const getMessage = () => {
    if (numMatches >= 8) {
      return "Congratulations!😃";
    } else if (numMatches < 8 && numMatches >= 6) {
      return "Good! Keep studing!🙂";
    } else {
      return "Not so good! 🥲";
    }
  };

  return (
    <div
      onClick={onClose}
      className="w-full h-screen bg-black/80 fixed flex justify-center items-center"
    >
      <div
        className="bg-myBlue w-[80%] md:w-[70%] pb-10 
        pt-6 
        px-4
        relative
        rounded-md flex flex-col items-center"
      >
        <CircleX
          onClick={onClose}
          size={30}
          className="absolute right-2 md:right-5 top-0 fill-black stroke-lime-200 mt-3 cursor-pointer"
        />
        <h2
          className="text-3xl mt-2 text-lime-200 font-bold md:text-4xl 
            text-center"
        >
          You finished the Next.js Quiz!
        </h2>
        <div
          className="bg-white w-[90%] mx-2 pb-8
             rounded-md mt-4 px-3 flex flex-col items-center"
        >
          <p className="text-2xl font-bold text-center mt-5">
            Number of correct answers: {numMatches}{" "}
          </p>

          <p className="text-2xl text-center font-medium mt-6">
            {getMessage()}
          </p>
          <div
            className="flex 
            w-full md:w-4/5
            font-medium text-center
             mt-10 border-2 border-black divide-x-2 divide-black"
          >
            <p className="w-2/4">
              Right Answers:
              <p className="">{rightAnswers.join("-")}</p>
            </p>
            <p className="w-2/4">
              User Answers:
              <p>{userAnswers.join("-")}</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
