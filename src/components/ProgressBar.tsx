type Props = {
  currentValue: number;
  maxValue: number;
};
export const ProgressBar = ({ currentValue, maxValue }: Props) => {
  return (
    <div className="fixed top-0 w-full">
      <progress
        className="w-full"
        value={currentValue}
        max={maxValue}
      ></progress>
    </div>
  );
};
