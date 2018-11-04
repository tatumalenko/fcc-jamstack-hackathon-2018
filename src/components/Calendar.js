import React from 'react';
import CalendarHeatMap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import '../css/heatmap.css';
import { getAllUserCommitsForContributionCalendar } from '../services/gitlabContributions';

class Calendar extends React.Component {
  constructor() {
    super();
    this.state = {
      gitlabData: [],
    };
  }

  componentDidMount() {
    getAllUserCommitsForContributionCalendar('catalinp86').then(data => {
      this.setState({ gitlabData: data });
    });
  }

  render() {
    if (this.state.gitlabData) {
      return (
        <CalendarHeatMap
          startDate={new Date('2018-01-01')}
          endDate={new Date('2018-12-31')}
          values={this.state.gitlabData}
          classForValue={value => {
            if (!value) {
              return 'color-empty';
            }
            return `color-scale-${value.count}`;
          }}
        />
      );
    }
  }
}

export default Calendar;
