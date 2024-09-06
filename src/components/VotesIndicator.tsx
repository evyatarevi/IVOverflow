import {
  Arrow,
  IndicatorContainer,
  NumberIndicator,
} from "../components/styledComponents/VotesIndicator.style";

const VotesIndicator = ({ votes }: { votes: number }) => {
  return (
    <IndicatorContainer>
      <Arrow>▲</Arrow>
      <NumberIndicator>{votes}</NumberIndicator>
      <Arrow>▼</Arrow>
    </IndicatorContainer>
  );
};

export default VotesIndicator;
