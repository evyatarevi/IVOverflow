import styled from "styled-components";

export const IndicatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;

export const Arrow = styled.div`
  cursor: pointer;
  font-size: 14px;
  color: #999;
  user-select: none;

  &:hover {
    color: #007bff;
  }
`;

export const NumberIndicator = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  // margin: 10px 0;
`;
