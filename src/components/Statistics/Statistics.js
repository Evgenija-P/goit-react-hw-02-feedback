import React from 'react';
import { StatisticsWrapper, Title, List, Text } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsWrapper>
      <Title>Statistics</Title>
      <List>
        <li style={{ color: 'green' }}>
          <Text>Good: </Text>
          {good}
        </li>
        <li style={{ color: 'orange' }}>
          <Text>Neutral: </Text>
          {neutral}
        </li>
        <li style={{ color: 'red' }}>
          <Text>Bad: </Text>
          {bad}
        </li>
        <li>
          <Text>Total: </Text>
          {total}
        </li>
        <li>
          <Text>Positive feedback: </Text>
          {positivePercentage}
        </li>
      </List>
    </StatisticsWrapper>
  );
};
