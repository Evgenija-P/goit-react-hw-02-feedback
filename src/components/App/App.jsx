// // import { Statistics } from './Statistics/Statistics';

import React, { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { AppWrapper, ButtonWrapper, Button } from './App.styled';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percent: 0 + '%',
  };

  buttonGood = () => {
    this.setState(prevState => {
      return {
        good: this.state.good + 1,
        total: this.countTotalFeedback(),
      };
    });
    this.setState({ percent: this.countPositiveFeedbackPercentage() + '%' });
  };

  buttonNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: this.state.neutral + 1,
        total: this.countTotalFeedback(),
      };
    });
    this.setState({ percent: this.countPositiveFeedbackPercentage() + '%' });
  };

  buttonBad = () => {
    this.setState(prevState => {
      return {
        bad: this.state.bad + 1,
        total: this.countTotalFeedback(),
      };
    });
    this.setState({ percent: this.countPositiveFeedbackPercentage() + '%' });
  };

  countTotalFeedback() {
    return this.state.total + 1;
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.state.total) * 100);
  }

  render() {
    return (
      <AppWrapper>
        Please leave feedback
        <ButtonWrapper>
          <Button
            tupe="button"
            onClick={this.buttonGood}
            style={{ backgroundColor: 'green' }}
          >
            Good
          </Button>
          <Button
            tupe="button"
            onClick={this.buttonNeutral}
            style={{ backgroundColor: 'orange' }}
          >
            Neutral
          </Button>
          <Button
            tupe="button"
            onClick={this.buttonBad}
            style={{ backgroundColor: 'red' }}
          >
            Bad
          </Button>
        </ButtonWrapper>
        {/* <FeedbackOptions
            options={
              (this.buttonGood, this.buttonNeutral, this.buttonBad)
            }
          /> */}
        {this.state.total !== 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.state.percent}
          />
        ) : (
          <Notification />
        )}
      </AppWrapper>
    );
  }
}
