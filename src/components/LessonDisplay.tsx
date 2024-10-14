import React, { useState } from "react";
import InformationDisplay from "./InformationDisplay";
import fundamentalRightsData from "../assets/fundamentalRights.json";

const LessonDisplay: React.FC = () => {
  const [working, setWorking] = useState<boolean>(false);
  const onInformationEnd = () => {
    setWorking(true);
  };
  return (
    <>
      {working && <h1>CallBack is working</h1>}
      {
        <InformationDisplay
          info={fundamentalRightsData.fundamentalRights}
          onInformationEnd={onInformationEnd}
        />
      }
    </>
  );
};
export default LessonDisplay;
