import React from "react";

interface VoteAnswerProps {
  count: number;
  type: "Votes" | "Answers";
}

const VoteAnswerIndicator: React.FC<VoteAnswerProps> = ({ count, type }) => {
  return (
    <div>
      <p>{count}</p>
      <p>{type}</p>
    </div>
  );
};

export default VoteAnswerIndicator;
