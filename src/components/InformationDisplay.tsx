import React from "react";
import { useState } from "react";

interface fundamentalRights {
  title: string;
  description: string;
  articles: string[];
}

interface InformationDisplayProps {
  info: fundamentalRights[];
  onInformationEnd: () => void;
}

const InformationDisplay: React.FC<InformationDisplayProps> = ({
  info,
  onInformationEnd,
}) => {
  const [currentInfoIndex, SetCurrentInfoIndex] = useState<number>(0);
  const HandleNext = () => {
    if (currentInfoIndex == info.length - 1) {
      onInformationEnd();
    } else {
      SetCurrentInfoIndex(currentInfoIndex + 1);
    }
  };
  const HandlePrev = () => {
    SetCurrentInfoIndex(currentInfoIndex == 0 ? 0 : currentInfoIndex - 1);
  };
  return (
    <div className="InfoDis">
      <h1>This is Information Display</h1>
      <h1>{info[currentInfoIndex].title}</h1>
      <h2>{info[currentInfoIndex].description}</h2>

      <button id="prevBtn" onClick={HandlePrev}>
        Prev
      </button>
      <button id="nextBtn" onClick={HandleNext}>
        Next
      </button>
    </div>
  );
};

export default InformationDisplay;
