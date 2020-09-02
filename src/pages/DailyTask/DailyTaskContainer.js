import React, { Component } from 'react';
import DailyTaskPresenter from './DailyTaskPresenter';

class DailyTaskContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marryTask: [
        {
          time: '1',
          hall: '1',
          name: '1',
          mobile: '1',
          menu: '1',
          people: '1',
          memo: '1',
          manager: '1',
          state: '1'
        }
      ],
      eventTask: [
        {
          time: '1',
          hall: '1',
          name: '1',
          mobile: '1',
          menu: '1',
          people: '1',
          memo: '1',
          manager: '1',
          state: '1'
        }
      ],
      visitTask: [
        {
          time: '1',
          classification: '1',
          name: '1',
          path: '1',
          consultationDate: '1',
          content: '1',
          moblie: '1',
          visit: '1'
        }
      ]
    };
  }

  render() {
    return (
      <DailyTaskPresenter
        style={{ margin: '10px' }}
        marryTask={this.state.marryTask}
        eventTask={this.state.eventTask}
        visitTask={this.state.visitTask}
      />
    );
  }
}

export default DailyTaskContainer;
