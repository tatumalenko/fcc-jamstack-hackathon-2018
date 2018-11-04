import React from 'react';
import CalendarHeatMap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import '../css/heatmap.css';
import { getAllUserCommitsForContributionCalendar } from '../services/gitlabContributions';

class Calendar extends React {
  constructor() {
    super();
    this.state = {
      gitlabData: new Map(),
    };
  }

  componentDidMount() {
    getAllUserCommitsForContributionCalendar('catalinp86').then(data =>
      this.setState({ gitlabData: data })
    );
  }

  render() {
    return (
      <CalendarHeatMap
        startDate={new Date('2018-01-01')}
        endDate={new Date('2018-12-31')}
        values={[
          { date: '2018-01-01', count: 1 },
          { date: '2018-01-22', count: 2 },
          { date: '2018-01-30', count: 2555 },
          // ...and so on
        ]}
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

export default Calendar;
