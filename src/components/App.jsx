import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  const onLeaveFeedback = e => {
    const feedbackOption = e.target.dataset.feedback;

    if (feedbackOption === 'good') setGood(prev => prev + 1);
    if (feedbackOption === 'neutral') setNeutral(prev => prev + 1);
    if (feedbackOption === 'bad') setBad(prev => prev + 1);

  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (good) {
      return Math.floor((good / countTotalFeedback()) * 100) + '%';
    }

    return '-';
  };

  return (
    <main>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {!countTotalFeedback() ? (
          <h3>There is no feedback yet...</h3>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </main>
  );
};
