import ClarifyingEngine from "@/components/ideation/ClarifyingEngine";
import InsightSolution from "@/components/ideation/InsightSolution";
import SolutionDescription from "@/components/ideation/SolutionDescription";
import StartOptions from "@/components/ideation/StartOptions";
import UniqueInsight from "@/components/ideation/UniqueInsight";
import React from "react";

type Props = {};

const Ideation = (props: Props) => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-white">
      {/* <ClarifyingEngine /> */}
      {/* <UniqueInsight /> */}
      {/* <StartOptions /> */}
      <InsightSolution />
      {/* <SolutionDescription /> */}
    </div>
  );
};

export default Ideation;
