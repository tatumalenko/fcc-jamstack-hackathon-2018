import React from 'react';
import CalendarHeatMap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import '../css/heatmap.css';
import {
  fetchDevContributionsMap,
  convertCommitMapToCountsArray,
} from '../services/devContributions';

class Calendar extends React.Component {
  constructor() {
    super();
    this.state = {
      commitMap: [],
      calendarMap: [],
    };
  }

  componentDidMount() {
    this.getAll();
  }

  async getAll() {
    const commitMap = await fetchDevContributionsMap({
      githubUserName: this.props.githubUsername,
      gitlabUserName: this.props.gitlabUsername,
    });
    const calendarMap = await convertCommitMapToCountsArray(commitMap);
    this.setState({ commitMap, calendarMap });
  }

  render() {
    if (this.state.calendarMap) {
      return (
        <CalendarHeatMap
          startDate={new Date('2018-01-01')}
          endDate={new Date('2018-12-31')}
          values={this.state.calendarMap}
          classForValue={value => {
            if (!value) {
              return 'color-empty';
            }
            return `color-scale-${value.count}`;
          }}
        />
      );
    }
    return <div>Loading...</div>;
  }
}

export default Calendar;
