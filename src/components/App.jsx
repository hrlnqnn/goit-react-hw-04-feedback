import { useState, useEffect } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export const App = () => {
  const INITIAL_STATE = JSON.parse(localStorage.getItem('feedbackData')) ?? {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedbackData, setFeedbackData] = useState(INITIAL_STATE);

  useEffect(
    () => localStorage.setItem('feedbackData', JSON.stringify(feedbackData)),
    [feedbackData]
  );

  const onLeaveFeedback = e => {
    const feedbackOption = e.target.dataset.feedback;

    setFeedbackData(prevState => ({
      ...prevState,
      [feedbackOption]: feedbackData[feedbackOption] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedbackData).reduce((a, b) => a + b, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    if (feedbackData.good) {
      return Math.floor((feedbackData.good / countTotalFeedback()) * 100) + '%';
    }

    return '-';
  };

  return (
    <main>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedbackData)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {!countTotalFeedback() ? (
          <h3>There is no feedback yet...</h3>
        ) : (
          <Statistics
            good={feedbackData.good}
            neutral={feedbackData.neutral}
            bad={feedbackData.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </main>
  );
};
