import styled from "styled-components";

export const Card = styled.div`
  max-width: 800px;
  display: flex;
  gap: 30px;
  padding: 20px 16px 16px;
  margin: 16px auto 0 auto;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  & > div {
    display: flex;
    flex-direction: column;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  & > div {
    margin-bottom: 24px;
  }
`;

export const CardDetails = styled.div`
  flex-grow: 1;
`;
export const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 16px;
  color: #333;
`;

export const Content = styled.p`
  font-size: 16px;
  color: #666;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

interface FlexContainerProps {
  justifycontent?: string;
}

export const AuthorContainer = styled.div<FlexContainerProps>`
  display: flex;
  justify-content: ${(props) => props.justifycontent || "normal"};
  margin: 10px 0;
  font-size: 14px;
  color: #999;
`;

export const QuestionHeader = styled.div`
  border-bottom: solid 1px #999;
`;
